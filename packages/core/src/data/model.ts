import { EntityConfig, Entity } from './entity';

export interface ModelConfig<T> extends EntityConfig<T> {
  idProperty?: string,
}

export class DataModel<T> extends Entity<T> {
  /**
   * "R" - The record is in a cleanly retrieved (unmodified) state.
   * "C" - The record is in a newly created (phantom) state.
   * "U" - The record is in an updated, modified (dirty) state.
   * "D" - The record is in a dropped state.
   */
  protected crudState: 'C' | 'R' | 'U' | 'D';

  // Gets the crudState of this record.
  isDirty = () => this.crudState === 'U';
  isErased = () => this.crudState === 'D';
  isPhantom = () => this.crudState === 'C';

  constructor(public config: ModelConfig<T> = {}) {
    super(config);
    if (!config.idProperty) config.idProperty = 'id';
  }

  // Create a model while also parsing any data for associations.
  loadData(data: T) {
    this.crudState = 'R';
    super.loadData(data);
  }

  create(data: T) {
    this.crudState = 'C';
    this.next(data);
  }

  get(fieldName: string) {
    return this.value[fieldName];
  }

  // Copies data from the passed record into this record. If the passed record is undefined, does nothing.
  set(newValue: any) {
    if (!newValue) return;
    this.crudState = 'U';
    this.next(Object.assign(this.value, newValue));
  }

  // Commits all changes made to the instance since either creation or the last commit operation.
  commit() { this.loadData(this.value); }

  reject() {
    this.crudState = 'R';
    this.next(this.previousValue);
  }

  clone(): DataModel<T> {
    return Object.assign(Object.create(this), this);
  }
}