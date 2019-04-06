import { nowAsString } from './date';

export const logInfo = (msg: string) => console.log(`${nowAsString()} [INFO] ${msg}`);
export const logWarn = (msg: string) => console.warn(`${nowAsString()} [WARN] ${msg}`);
export const logError = (msg: string) => console.trace(`${nowAsString()} [ERROR] ${msg} caused by:`);