import axios from 'axios';
import moment from 'moment';
import { Singleton } from '~/core';

@Singleton
export class Http {
  constructor() {
    const http = this;
    ['get', 'post', 'put', 'patch', 'delete'].forEach(method => http[method] = async ({ url, ...config }, result) => {
      console.log(`Requesting to: ${url}`);
      try {
        return (await axios({ method, url, ...config })).data;
      } catch (e) {
        console.error(`ERROR ${moment().format('YYYY-MM-DD[T]HH:mm:ss')} ${e}`);
        return result;
      }
    });
  }

  toQueryString(params) {
    const pairs = [];
    for (let key in params) {
      pairs.push(`${key}=${encodeURIComponent(params[key])}`);
    }
    return pairs.join('&');
  }
}