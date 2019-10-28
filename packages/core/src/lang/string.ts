import * as dateFns from 'date-fns';

declare global {
  interface String {
    decode(): any,
    parseInt(): number,
    parseDate(pattern?: string, backupDate?: Date): Date,
  }
}

String.prototype.decode = function(this: string) { return JSON.parse(this); }
String.prototype.parseInt = function(this: string) { return parseInt(this, 10); }
String.prototype.parseDate = function(this: string) { return dateFns.parseISO(this); }