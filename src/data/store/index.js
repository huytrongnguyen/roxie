import { AbstractStore } from './abstract';

export const Store = config => {
  return new AbstractStore(config);
};