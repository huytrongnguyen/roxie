interface Array<T> {
  /**
   * Creates an object composed of keys generated from the results of running each element of `collection` through `key`.
   *
   * @param key
   */
  groupBy(key: string): { [key:string]: T[] },

  /**
   * Removes all elements from `array` that `predicate` returns truthy and returns an array of the removed elements.
   *
   * @param predicate
   */
  remove(predicate: (value: T, index?: number, array?: T[]) => boolean): T[],

  add(value: T): void;
  insert(index: number, value: T): void;
  removeAt(index: number): void;
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

Array.prototype.remove = function<T>(this: T[], predicate: (value: T, index?: number, array?: T[]) => boolean) {
  const result: T[] = [];
  for (let i = 0; i < this.length; ++i) {
    if (predicate(this[i], i, this)) {
      result.push(...this.splice(i, 1));
    }
  }
  return result;
}

Array.prototype.add = function<T>(this: T[], value: T) { this.push(value); }
Array.prototype.insert = function<T>(this: T[], index: number, value: T) { this.splice(index, 0, value); }
Array.prototype.removeAt = function<T>(this: T[], index: number) { this.splice(index, 1); }