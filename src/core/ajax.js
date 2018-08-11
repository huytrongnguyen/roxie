import axios from 'axios';
import moment from 'moment';

class Ajax {
  async request({ method = 'get', base_url = '', path, params = {} }) {
    const url = `${base_url}/${path}` + (method === 'get' ? `?${this.toQueryString(params)}` : '');
    console.log(`Requesting to: ${url}`);
    try {
      return (await axios({ method, url, data: params })).data;
    } catch (e) {
      console.error(`ERROR ${moment().format('YYYY-MM-DD[T]HH:mm:ss')} ${e}`);
      return {}
    }
  }

  toQueryString(params) {
    const pairs = [];
    for (let key in params) {
      pairs.push(`${key}=${encodeURIComponent(params[key])}`);
    }
    return pairs.join('&');
  }
}

export default new Ajax();