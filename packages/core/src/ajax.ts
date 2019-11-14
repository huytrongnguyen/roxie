import axios, { AxiosRequestConfig, Method } from 'axios';

import { PlainObject } from './types';

export type HttpParams = {
  pathParams?: PlainObject,
  queryParams?: PlainObject,
  body?: any,
  headers?: PlainObject,
}

export type AjaxSettings = {
  url: string,
  method?: string,
  params?: HttpParams,
}

export const pendingRequests = axios.CancelToken.source();

export const Ajax = {
  request: async <T>(settings: AjaxSettings) => {
    const { method = 'get', params = {} } = settings;
    let { url } = settings;

    if (params.pathParams) {
      Object.entries(params.pathParams).forEach(([key,value]) => url = url.replace(`{${key}}`, value))
    }

    if (params.queryParams) {
      url = `${url}?${Object.entries(params.queryParams).map(([key,value]) => `${key}=${value}`).join('&')}`
    }

    try {
      const config: AxiosRequestConfig = {
        url,
        method: method as Method,
        headers: params.headers || {},
        cancelToken: pendingRequests.token,
      };
      params.body && (config.data = params.body);
      return (await axios(config)).data as T;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log(`${url} request cancelled.`);
      } else {
        const msg = `Http failure response for "${url}": ${error.message}`;
        console.error(msg);
      }
      throw error;
    }
  },
}