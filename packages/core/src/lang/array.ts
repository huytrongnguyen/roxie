interface Array<T> {
  groupBy(key: string): { [key:string]: T[] },
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