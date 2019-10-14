import { Subject } from '../observable';
import { HttpParams } from '../ajax';

import { ProxyConfig, request } from './proxy';

export interface ModelConfig<T> {
  proxy?: ProxyConfig,
  data?: T,
}

export class DataModel<T> extends Subject<T> {
  constructor(protected config: ModelConfig<T> = {}) {
    super();
    if (config.data) {
      this.loadData(config.data);
    }
  }

  loadData(value: T) {
    this.next(value);
  }

  load(params?: HttpParams) {
    this.fetch(params)
        .then(value => this.next(value))
        .catch(reason => this.error(reason))
        .finally(() => this.complete());
  }

  async fetch(params?: HttpParams) {
    const { proxy } = this.config;

    if (!proxy) return null;

    return request<T>(proxy, params);
  }
}