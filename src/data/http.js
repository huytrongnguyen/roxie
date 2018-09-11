import moment from 'moment';
import { Singleton } from '~/core';

@Singleton
export class Http {
  xhr = new XMLHttpRequest();

  constructor() {
    const http = this;
    ['get', 'post', 'put', 'patch', 'delete'].forEach(method => http[method] = async ({ url, ...config }, result) => {
      console.log(`Requesting to: ${url}`);
      try {
        return (await requestAsync({ method, url, ...config }));
      } catch (e) {
        console.error(`ERROR ${moment().format('YYYY-MM-DD[T]HH:mm:ss')} ${e}`);
        return result;
      }
    });
  }

  requestAsync(config) {
    return new Promise((resolve, reject) => {
      this.request(config, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      })
    });
  }

  request({ method, url, contentType = 'application/json; charset=utf-8', data }, done) {
    (method === 'get' && data !== null) && (url = `${url}?${this.toQueryString(data)}`);
    const xhr = this.xhr;
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', contentType);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          try {
            done(null, JSON.parse(xhr.responseText))
          } catch (e) {
            done(null, xhr.responseText)
          }
        } else {
          try {
            done(JSON.parse(xhr.responseText))
          } catch (e) {
            done(xhr.responseText)
          }
        }
      }
    }
    xhr.send(data !== null ? JSON.stringify(data) : null);
  }

  toQueryString(params) {
    const pairs = [];
    for (let key in params) {
      pairs.push(`${key}=${encodeURIComponent(params[key])}`);
    }
    return pairs.join('&');
  }
}