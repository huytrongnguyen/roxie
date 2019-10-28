export * from './roxie';
export * from './ajax';
export * from './observable';
export * from './data';
export * from './types';

export const logInfo = (msg: string) => console.log(`[INFO] ${msg}`);
export const logWarn = (msg: string) => console.warn(`[WARN] ${msg}`);
export const logError = (msg: string) => console.trace(`[ERROR] ${msg}`);
