import $ from 'jquery';

import './lang/number';
import './lang/string';
import './lang/array';

export const Roxie = {
  query: (selector: string) => $(selector),
  guid: (prefix: string = '', suffix: string = '') => `${prefix}${(Math.random() * (1<<30)).toString(16).replace('.', '')}${suffix}`,
  isEmpty: (value: any) => value == null || value === '' || (Roxie.isArray(value) && value.length === 0) || Roxie.Object.isEmpty(value),
  isNotEmpty: (value: any) => !Roxie.isEmpty(value),
  isString: (value: any) => typeof value === 'string',
  isNumber: (value: any) => typeof value === 'number',
  isBoolean: (value: any) => typeof value === 'boolean',
  isObject: (value: any) => toString.call(value) === '[object Object]',
  isArray: (value: any) => toString.call(value) === '[object Array]',
  isDate: (value: any) => toString.call(value) === '[object Date]',
  classNames: (...expressions: any[]) => {
    return expressions
        .filter(exp => Roxie.isNotEmpty(exp))
        .map(exp => {
          if (Roxie.isString(exp)) {
            return exp;
          } else if (Roxie.isObject(exp)) {
            return Object.entries(exp)
                .filter(([key, value]: [string, boolean]) => value === true)
                .map(([key, value]: [string, boolean]) => key)
                .join(' ');
          } else {
            return '';
          }
        })
        .join(' ');
  },
  Number: {
    format: (value: number = 0, decimal: number = 0) => (value || 0).toLocaleString('en', { maximumFractionDigits: decimal }),
    parse: (value: string) => parseInt(value, 10),
    percentage: (ratio: number = 0, decimal: number = 2) => `${Roxie.Number.format((ratio || 0) * 100, decimal)}%`,
  },
  Object: {
    isEmpty: (o: any) => {
      for (let key in o) {
        if (o.hasOwnProperty(key)) {
          return false;
        }
      }

      return true;
    },
  }
}