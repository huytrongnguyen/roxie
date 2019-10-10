import { Ajax, HttpParams } from '../ajax';

export interface ProxyConfig {
  url: string,
  method?: string,
  reader?: {
    rootProperty: string,
  },
}

export async function request<T>(proxy: ProxyConfig, params?: HttpParams) {

  const { url, method = 'get', reader } = proxy,
        response = await Ajax.request<any>({ url, method, params })

  if (!response) return null;

  const result: T = reader && reader.rootProperty ? response[reader.rootProperty] : response;
  return result;
}