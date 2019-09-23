interface Array<T> {
  filter(predicate: (value: T, index?: number, array?: T[]) => boolean): T[],
  where(predicate: (value: T, index?: number, array?: T[]) => boolean): T[],
  map<U>(selector: (value: T, index?: number, array?: T[]) => U): U[],
  select<U>(selector: (value: T, index?: number, array?: T[]) => U): U[],
  groupBy(key: string): { [key:string]: T[] },
  find(predicate: (value: T, index?: number, array?: T[]) => boolean): T,
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

Array.prototype.groupBy = function<T>(this: T[], key: string) {
  return this.reduce((result, item) => {
    if (item.hasOwnProperty(key)) {
      !result[item[key]] && (result[item[key]] = []);
      result[item[key]].push(item);
    }
    return result;
  }, {});
}

Array.prototype.find = function<T>(this: T[], predicate: (value: T, index?: number, array?: T[]) => boolean) {
  let result: T;
  for (let i = 0; i < this.length; ++i) {
    if (predicate(this[i], i, this)) {
      result = this[i];
      break;
    }
  }
  return result;
}