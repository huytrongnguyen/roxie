/**
 * Returns `true `if the passed value is a string.
 * @param value The value to test.
 */
export const isString = (value: any) => (typeof value) === 'string';

/**
 * Returns `true` if the passed value is a number. Returns `false` for non-finite numbers.
 * @param value The value to test.
 */
export const isNumber = (value: any) => (typeof value) === 'number';

/**
 * Returns `true` if the passed value is a boolean.
 * @param value The value to test.
 */
export const isBoolean =(value: any) => (typeof value) === 'boolean';

/**
 * Returns `true` if the passed value is a JavaScript 'primitive', a string, number or boolean.
 * @param value The value to test.
 */
export const isPrimitive = (value: any) => isString(value) || isNumber(value) || isBoolean(value);

/**
 * Returns `true` if the passed value is a JavaScript Function, `false` otherwise.
 * @param value The value to test.
 */
export const isFunction = (value: any) => !!value && typeof value === 'function';

/**
 * Returns `true` if the passed value is a JavaScript Object, `false` otherwise.
 * @param value The value to test.
 */
export const isObject = (value: any) => toString.call(value) === '[object Object]';

/**
 * Returns `true` if the passed value is a JavaScript Array, `false` otherwise.
 * @param target The target to test.
 */
export const isArray = (value: any) => toString.call(value) === '[object Array]';