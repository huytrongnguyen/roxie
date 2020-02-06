import { PlainObject } from '../types';
import { Ajax, HttpParams } from '../ajax';
import { ReaderConfig } from './reader';
import { WriterConfig } from './writer';

export interface ProxyConfig {
  url: string,
  method?: string,
  reader?: ReaderConfig,
  writer?: WriterConfig,
  headers?: PlainObject,
}

export async function query<T>(proxy: ProxyConfig, params?: HttpParams, resolver?: (data: any, params?: HttpParams) => T) {
  const { url, method = 'get', reader = {} as ReaderConfig } = proxy;
  params.headers = Object.assign({}, proxy.headers || {}, params.headers || {});
  const response = await Ajax.request<any>({ url, method, params });

  if (!response) return null;

  if (reader.keepRawData) {
    reader.rawData = response;
  }

  if (reader.transform) {
    return reader.transform<T>(response);
  }

  const result: T = reader && reader.rootProperty ? response[reader.rootProperty] : response;
  return resolver ? resolver(result, params) : result;
}

export function mutate(data: any, proxy: ProxyConfig, params: HttpParams = {}) {
  const { url, method = 'post', writer = {} as WriterConfig } = proxy;

  if (writer.transform) {
    data = writer.transform(data);
  }

  params.body = data;
  return Ajax.request({ url, method, params });
}