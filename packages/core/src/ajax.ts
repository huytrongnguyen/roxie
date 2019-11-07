import axios, { AxiosRequestConfig, Method } from 'axios';

import { PlainObject } from './types';

export type HttpParams = {
  pathParams?: PlainObject,
  queryParams?: PlainObject,
  body?: any;
}

export type AjaxSettings = {
  url: string,
  method?: string,
  params?: HttpParams,
  headers?: PlainObject<string>,
  onError?: (msg: string, error?: any) => void,
  onComplete?: () => void,
  defaultValue?: any,
}

export const Ajax = {
  request: async <T>(settings: AjaxSettings) => {
    const { method = 'get', params = {}, headers = {}, onError, onComplete, defaultValue = null } = settings;
    let { url } = settings;

    if (params.pathParams) {
      Object.entries(params.pathParams).forEach(([key,value]) => url = url.replace(`{${key}}`, value))
    }

    if (params.queryParams) {
      url = `${url}?${Object.entries(params.queryParams).map(([key,value]) => `${key}=${value}`).join('&')}`
    }

    try {
      const config: AxiosRequestConfig = { method: method as Method, url, headers };
      params.body && (config.data = params.body);
      return (await axios(config)).data as T;
    } catch (error) {
      const msg = `Http failure response for "${url}": ${error.message}`;
      console.error(msg);
      onError && onError(msg, error.response);
      return defaultValue;
    } finally {
      onComplete && onComplete();
    }
  },
}