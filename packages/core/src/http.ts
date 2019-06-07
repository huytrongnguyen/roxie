import axios, { AxiosRequestConfig, Method } from 'axios';

import { logInfo, logError } from './logger';

export function toQueryString(params: any = {}) {
  const pairs = [];
  for (let key in params) {
    pairs.push(`${key}=${encodeURIComponent(params[key])}`);
  }
  return pairs.join('&');
}

async function request(method: Method, url: string, config?: AxiosRequestConfig, defaultValue?: any) {
  logInfo(`Requesting to: ${url}`);
  try {
    return (await axios({ method, url, ...config })).data;
  } catch (msg) {
    logError(msg);
    return defaultValue;
  }
}

export class Http {
  static get(url: string, config?: AxiosRequestConfig, defaultValue?: any) {
    return request('get', url, config, defaultValue);
  }

  static post(url: string, config?: AxiosRequestConfig, defaultValue?: any) {
    return request('post', url, config, defaultValue);
  }

  static put(url: string, config?: AxiosRequestConfig, defaultValue?: any) {
    return request('put', url, config, defaultValue);
  }

  static patch(url: string, config?: AxiosRequestConfig, defaultValue?: any) {
    return request('patch', url, config, defaultValue);
  }

  static delete(url: string, config?: AxiosRequestConfig, defaultValue?: any) {
    return request('delete', url, config, defaultValue);
  }
}