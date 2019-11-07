import { Subject } from '../observable';
import { HttpParams } from '../ajax';

import { ProxyConfig, query, mutate } from './proxy';

export interface EntityConfig<T> {
  proxy?: ProxyConfig,
  data?: T,
}

export abstract class Entity<T> extends Subject<T> {
  protected previousValue: T;

  constructor(protected config: EntityConfig<T> = {}) {
    super();
    if (config.data) {
      this.loadData(config.data);
    }
  }

  loadData(value: T) {
    this.previousValue = value;
    this.next(value);
  }

  // Asynchronously loads an entity instance
  load(params?: HttpParams) {
    this.fetch(params)
        .then(value => this.loadData(value))
        .catch(reason => this.error(reason))
        .finally(() => this.complete());
  }

  protected async fetch(params?: HttpParams) {
    const { proxy } = this.config;

    if (!proxy) return null;

    return query<T>(proxy, params);
  }

  // Saves the entity instance using the configured proxy. The save action is asynchronous.
  save(proxy?: ProxyConfig, params?: HttpParams) {
    if (!proxy) proxy = this.config.proxy;
    if (!proxy) return null;

    return mutate(this.value, proxy, params);
  }
}