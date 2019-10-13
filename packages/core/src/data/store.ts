import { ModelConfig, DataModel } from './model';

export interface StoreConfig<T> extends ModelConfig<T[]> { }

export class DataStore<T> extends DataModel<T[]> {
  constructor(protected config: StoreConfig<T> = {}) {
    super();
    if (config.data) {
      const interval = setInterval(() => {
        if (this.subscriber) {
          this.next(config.data);
          clearInterval(interval);
        }
      }, 100)
    }
  }
}