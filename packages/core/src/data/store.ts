import { HttpParams } from '../ajax';

import { ProxyConfig } from './proxy';
import { Sorter, sort } from './sorter';
import { EntityConfig, Entity } from './entity';
import { DataModel } from './model';

export interface StoreConfig<T> extends EntityConfig<T[]> {
  proxy?: ProxyConfig,
  data?: T[],
  model?: DataModel<T>,
  sorters?: Sorter[],
  pageSize?: number,
}

export class DataStore<T> extends Entity<T[]> {
  records: DataModel<T>[];
  getModifiedRecords() { return this.records.filter(record => record.isPhantom() || record.isDirty()); }
  getNewRecords() { return this.records.filter(record => record.isPhantom()); }
  getUpdatedRecords() { return this.records.filter(record => record.isDirty()); }
  commitChanges() { this.records.forEach(record => record.commit()); }
  rejectChanges() { this.records.forEach(record => record.reject()); }

  currentPage = 1;

  constructor(public config: StoreConfig<T> = {}) { super(); }

  // Loads an array of data straight into the Store.
  loadData(data: T[]) {
    const { sorters, model } = this.config;

    if (sorters) {
      sorters.forEach(sorter => data = sort(data, sorter));
    }

    if (model) {
      this.records = data.map(item => {
        const record = model.clone();
        record.loadData(item);
        return record;
      });
    }

    super.loadData(data);
  }

  // Loads a given 'page' of data by setting the start and limit values appropriately.
  loadPage(page: number) {
    const limit = this.config.pageSize || 0;
    this.fetch({ queryParams: { page, start: (page - 1) * limit + 1, limit } })
        .then(value => { this.currentPage = page; this.loadData(value); })
        .catch(reason => this.error(reason))
        .finally(() => this.complete());
  }

  // Loads an array of DataModel instances into the store, fires the datachanged event.
  loadRecords(records: DataModel<T>[]) {
    this.records = records;
    super.loadData(records.map(record => record.value));
  }

  sort(sorters: Sorter[]) {
    if (sorters) {
      let value = this.value;
      sorters.forEach(sorter => value = sort(value, sorter));
      this.next(value);
    }
  }
}