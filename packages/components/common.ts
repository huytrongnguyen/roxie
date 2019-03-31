import _ from 'lodash';

import { isString, isObject } from '@roxie/core';

export function classNames(...expressions: any) {
  return _.chain(expressions)
    .filter(exp => exp)
    .map(exp => {
      if (isString(exp)) {
        return exp;
      } else if (isObject(exp)) {
        return _.chain(<any>exp)
            .pickBy((value: boolean) => value === true)
            .keys()
            .value().join(' ');
      } else {
        return '';
      }

    })
    .value().join(' ');
}