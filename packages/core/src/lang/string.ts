import * as dateFns from 'date-fns';

declare global {
  interface String {
    decode(): any,
    parseInt(): number,
    parseDate(pattern?: string, backupDate?: Date): Date,
    format(...args: any[]): string,
  }
}

String.prototype.decode = function(this: string) { return JSON.parse(this); }
String.prototype.parseInt = function(this: string) { return parseInt(this, 10); }
String.prototype.parseDate = function(this: string, pattern?: string, backupDate: Date = new Date()) { return dateFns.parse(this, pattern, backupDate); }

const formatRE = /(\{[^\}^\{]+\})/g;
String.prototype.format = function(this: string, ...args: any[]) {
  return this.replace(formatRE, (str: string, m: string) => {
    const index = m.substr(1).parseInt(),
          value = args[index + 1];

    if (value === null || value === undefined) return '';
    return value.toString();
  });
}