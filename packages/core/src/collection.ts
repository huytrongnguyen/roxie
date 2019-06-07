interface Array<T> {
  count(): number;

  add(item: T): void;
  insert(index: number, item: T): void;

  first(): T;
  last(): T;

  forEach(action: (value: T, index: number, array: T[]) => void): void;
  filter(predicate: (value: T, index: number, array: T[]) => boolean): T[];
  map<T, TResult>(selector: (value: T, index: number, array: T[]) => TResult): TResult[];
  reduce<T, TAccumulate>(func: (accumulate: TAccumulate, value: T, index: number, array: T[]) => TAccumulate, seed: TAccumulate): TAccumulate;

  findIndex(predicate: (value: T, index: number, array: T[]) => boolean): number;

  find(predicate: (value: T, index: number, array: T[]) => boolean): T;
  contains(comparer: (value: T, index: number, array: T[]) => boolean): boolean;

  /** Alias of `filter` */
  where(predicate: (value: T, index: number, array: T[]) => boolean): T[];
  /** Alias of `map` */
  select<T, TResult>(selector: (value: T, index: number, array: T[]) => TResult): TResult[];
  /** Alias of `reduce` */
  aggregate<T, TAccumulate>(func: (accumulate: TAccumulate, value: T, index: number, array: T[]) => TAccumulate, seed: TAccumulate): TAccumulate;
}

Object.assign(Array.prototype, {
  count<T>(this: T[]) { return this.length },

  add<T>(this: T[], item: T) { this.push(item); },

  insert<T>(this: T[], index: number, item: T) { this.splice(index, 0, item) },

  first<T>(this: T[]) { return this && this.length ? this[0] : undefined },

  last<T>(this: T[]) { return this && this.length ? this[this.length - 1] : undefined },

  forEach<T>(this: T[], action: (value: T, index: number, array: T[]) => void) {
    for (let index = -1; ++index < this.length; ) {
      action(this[index], index, this);
    }
  },

  filter<T>(this: T[], predicate: (value: T, index: number, array: T[]) => boolean) {
    const result: T[] = [];
    this.forEach((item: T, index: number, array: T[]) => predicate(item, index, array) && (result.add(item)));
    return result;
  },

  map<T, TResult>(this: T[], selector: (value: T, index: number, array: T[]) => TResult) {
    const result: TResult[] = [];this.reduceRight
    this.forEach((item: T, index: number, array: T[]) => result.add(selector(item, index, array)));
    return result;
  },

  reduce<T, TAccumulate>(this: T[], func: (accumulate: TAccumulate, value: T, index: number, array: T[]) => TAccumulate, seed: TAccumulate) {
    this.forEach((item: T, index: number, array: T[]) => seed = func(seed, item, index, array));
    return seed;
  },

  findIndex<T>(this: T[], predicate: (value: T, index: number, array: T[]) => boolean) {
    for (let index = -1; ++index < this.length; ) {
      if (predicate(this[index], index, this)) {
        return index;
      }
    }this.push
    return -1;
  },

  find<T>(this: T[], predicate: (value: T, index: number, array: T[]) => boolean) { return this[this.findIndex(predicate)] },
  contains<T>(this: T[], comparer: (value: T, index: number, array: T[]) => boolean) { return this.findIndex(comparer) > 1; },
  where<T>(this: T[], predicate: (value: T, index: number, array: T[]) => boolean) { return this.filter(predicate) },
  select<T, TResult>(this: T[], selector: (value: T, index: number, array: T[]) => TResult) { return this.map(selector); },
  aggregate<T, TAccumulate>(this: T[], func: (accumulate: TAccumulate, value: T, index: number, array: T[]) => TAccumulate, seed: TAccumulate) { return this.reduce(func, seed); }
});