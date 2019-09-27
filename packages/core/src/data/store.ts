import { Ajax, HttpParams } from '../ajax';
import { Subject } from '../observable';

type ProxyConfig = {
  url: string,
  method?: string,
  reader?: {
    rootProperty: string,
  },
}

export type StoreConfig<T> = {
  proxy?: ProxyConfig,
  resolver?: (data: any, params?: HttpParams) => any,
  data?: T,
}

export class DataStore<T> extends Subject<T> {
  constructor(protected config: StoreConfig<T> = {}) {
    super();
    if (config.data) {
      const interval = setInterval(() => {
        if (this.subcriber) {
          this.next(config.data);
          clearInterval(interval);
        }
      }, 100)
    }
  }

  load(params?: HttpParams) {
    this.fetch(params)
        .then(value => this.next(value))
        .catch(reason => this.error(reason))
        .finally(() => this.complete());
  }

  async fetch(params?: HttpParams) {
    if (!this.config.proxy) return null;

    const { proxy, resolver } = this.config,
          { url, method = 'get', reader } = proxy,
          response = await Ajax.request<any>({ url, method, params })

    if (!response) return null;

    let result = reader && reader.rootProperty ? response[reader.rootProperty] : response;
    resolver && (result = resolver(result, params));
    return result as T;
  }
}