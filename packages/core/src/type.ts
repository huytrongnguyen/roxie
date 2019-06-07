export const isString = (value: any) => (typeof value) === 'string';

export const isNumber = (value: any) => (typeof value) === 'number';

export const isBoolean =(value: any) => (typeof value) === 'boolean';

export const isPrimitive = (value: any) => isString(value) || isNumber(value) || isBoolean(value);

export const isFunction = (value: any) => !!value && typeof value === 'function';

export const isObject = (value: any) => toString.call(value) === '[object Object]';

export const isArray = (value: any) => toString.call(value) === '[object Array]';