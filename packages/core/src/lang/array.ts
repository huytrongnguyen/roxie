interface Array<T> {
  filter(predicate: (value: T, index?: number, array?: T[]) => boolean): T[],
  where(predicate: (value: T, index?: number, array?: T[]) => boolean): T[],
  map<U>(selector: (value: T, index?: number, array?: T[]) => U): U[],
  select<U>(selector: (value: T, index?: number, array?: T[]) => U): U[],
}

Array.prototype.filter = function<T>(this: T[], predicate: (value: T, index?: number, array?: T[]) => boolean) {
  const result: T[] = [];
  for (let i = 0; i < this.length; ++i) {
    if (predicate(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
}

Array.prototype.where = function<T>(this: T[], predicate: (value: T, index?: number, array?: T[]) => boolean) {
  return this.filter(predicate);
}

Array.prototype.map = function<T, U>(this: T[], selector: (value: T, index?: number, array?: T[]) => U) {
  const result: U[] = [];
  for (let i = 0; i < this.length; ++i) {
      result.push(selector(this[i], i, this));
  }
  return result;
}

Array.prototype.select = function<T, U>(this: T[], selector: (value: T, index?: number, array?: T[]) => U) {
  return this.map(selector);
}

