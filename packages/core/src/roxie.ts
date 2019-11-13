import $ from 'jquery';
import * as dateFns from 'date-fns';

import './lang/number';
import './lang/string';
import './lang/array';
import './lang/date';

import { LocalCache } from './cache';
import { Subject } from './observable';
import { Uuid } from './generator';

export const Roxie = {
  query: (selector: any) => $(selector),
  isEmpty: (value: any) => value === undefined || value == null || value === '' || (Roxie.isArray(value) && value.length === 0) || Roxie.Object.isEmpty(value),
  isNotEmpty: (value: any) => !Roxie.isEmpty(value),
  isString: (value: any) => typeof value === 'string',
  isNumber: (value: any) => typeof value === 'number',
  isBoolean: (value: any) => typeof value === 'boolean',
  isObject: (value: any) => toString.call(value) === '[object Object]',
  isArray: (value: any) => toString.call(value) === '[object Array]',
  isDate: (value: any) => toString.call(value) === '[object Date]',
  clone: (value: any) => Roxie.JSON.encode(value).decode(),
  guid: (prefix: string = '', suffix: string = '') => `${prefix}${(Math.random() * (1<<30)).toString(16).replace('.', '')}${suffix}`,
  uuid: Uuid.generate,
  classNames(...expressions: any[]) {
    return expressions
        .filter(exp => Roxie.isNotEmpty(exp))
        .map(exp => {
          if (Roxie.isString(exp)) {
            return exp as string;
          } else if (Roxie.isObject(exp)) {
            return Object.entries(exp)
                .filter(([key, value]: [string, boolean]) => value === true)
                .map(([key, value]: [string, boolean]) => key)
                .join(' ');
          } else {
            return '';
          }
        })
        .filter(className => Roxie.isNotEmpty(className))
        .join(' ');
  },
  interval(period: number) {
    const subject = new Subject<number>();
    let counter = 0;
    const timer = setInterval(() => subject.next(counter++), period);
    subject.complete = () => clearInterval(timer);
    return subject;
  },
  Number: {
    format: (value: number = 0, decimal: number = 0) => (value || 0).toLocaleString('en', { maximumFractionDigits: decimal }),
    parse: (value: string) => parseInt(value, 10),
    percentage: (ratio: number = 0, decimal: number = 2) => `${Roxie.Number.format((ratio || 0) * 100, decimal)}%`,
  },
  Date: {
    DAYS_IN_WEEK: 7,
    DEFAULT_PATTERN: "yyyy-MM-dd'T'HH:mm:ss",
    ...dateFns,
    format: (date?: number | Date, pattern: string = 'yyyy-MM-dd HH:mm:ss') => dateFns.format(date || new Date(), pattern),
    now: () => new Date(),
    utc() {
      var now = new Date();
      var utc =  Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
      return new Date(utc);
    },
    fromUnixTime: (value: number) => dateFns.fromUnixTime(value),
    toUnixTime: (date: number | Date) => dateFns.getUnixTime(date),
    toUnixTimeMilliseconds: (date: number | Date) => dateFns.getTime(date),
  },
  Object: {
    isEmpty(o: any) {
      for (let key in o) {
        if (o.hasOwnProperty(key)) {
          return false;
        }
      }

      return true;
    },
    fromQueryString: (queryString: string) => {
      queryString = queryString.replace('?', '');
      return queryString.split('&').reduce((queryParams, paramStr: string) => {
        const param = paramStr.split('=');
        queryParams[param[0]] = param[1];
        return queryParams;
      }, {} as any);
    },
    toQueryString: (queryParams: { [key:string]: any }) => {
      return Object.entries(queryParams).map(([key, value]) => `${key}=${value}`).join('&');
    },
  },
  JSON: {
    encode: (value: any, space?: string | number) => JSON.stringify(value, null, space),
    decode: (value: string) => JSON.parse(value),
  },
  Logger: {
    logInfo: (msg: string) => console.log(`${Roxie.Date.now().format(Roxie.Date.DEFAULT_PATTERN)} INFO: ${msg}`),
    logWarning: (msg: string) => console.warn(`${Roxie.Date.now().format(Roxie.Date.DEFAULT_PATTERN)} WARNING: ${msg}`),
    logError: (msg: string) => console.error(`${Roxie.Date.now().format(Roxie.Date.DEFAULT_PATTERN)} ERROR: ${msg}`),
  },
  Cache: new LocalCache(),
}