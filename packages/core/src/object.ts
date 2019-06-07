export const guid = (prefix?: string) => `${prefix || ''}${(Math.random() * (1 << 30)).toString(16).replace('.', '')}`;

export const encode = (o: any, space?: number) => JSON.stringify(o, null, space);

export function decode<T>(json: string) { return JSON.parse(json) as T };

export function clone<T>(item: any) { return decode<T>(encode(item)); }

export const define = (destination: any, ...object: any[]) => Object.assign(destination, ...object)