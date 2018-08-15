import { ajax } from 'rxjs/ajax';
import { Injectable } from './injectable';

@Injectable
export class Ajax {
  request({ base_url = '', path, method = 'get', params = {} }) {
    const url = `${base_url}/${path}` + (method === 'get' ? `?${this.toQueryString(params)}` : '');
    console.log(`Requesting to: ${method} ${url}`);
    return ajax({ url, method, body: method === 'post' && params }).toPromise();
  }

  toQueryString(params) {
    const pairs = [];
    for (let key in params) {
      pairs.push(`${key}=${encodeURIComponent(params[key])}`);
    }
    return pairs.join('&');
  }
}