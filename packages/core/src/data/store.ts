import { ModelConfig, DataModel } from './model';

export interface StoreConfig<T> extends ModelConfig<T[]> { }

export class DataStore<T> extends DataModel<T[]> {
  constructor(protected config: StoreConfig<T> = {}) { super(config); }
}