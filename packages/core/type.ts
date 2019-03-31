export const isPrimitive = (value: any) => { const type = typeof value; return type === 'string' || type === 'number' || type === 'boolean'; }
export const isString = (value: any) => (typeof value) === 'string';
export const isFunction = (value: any) => !!value && typeof value === 'function';
export const isObject = (value: any) => toString.call(value) === '[object Object]';
export const isArray = (value: any) => toString.call(value) === '[object Array]';