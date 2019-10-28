import * as dateFns from 'date-fns';

declare global {
  interface Date {
    format(pattern: string): string,
    toUnixTime(): number,
    toUnixTimeMilliseconds(): number,
    add(amount: number, key: string): Date,
    substract(amount: number, key: string): Date,
    diff(dateToCompare: Date, key: string): number,
    startOf(key: string): Date,
    endOf(key: string): Date,
  }
}

Date.prototype.format = function (this: Date, pattern: string) { return dateFns.lightFormat(this, pattern); }
Date.prototype.toUnixTime = function (this: Date) { return dateFns.getUnixTime(this); }
Date.prototype.toUnixTimeMilliseconds = function (this: Date) { return dateFns.getTime(this); }

Date.prototype.add = function (this: Date, amount: number, key: string) {
  switch (key) {
    case 'milliseconds': case 'ms': return dateFns.addMilliseconds(this, amount);
    case 'seconds': case 's': return dateFns.addSeconds(this, amount);
    case 'minutes': case 'm': return dateFns.addMinutes(this, amount);
    case 'hours': case 'h': return dateFns.addHours(this, amount);
    case 'days': case 'd': return dateFns.addDays(this, amount);
    case 'weeks': case 'w': return dateFns.addWeeks(this, amount);
    case 'months': case 'M': return dateFns.addMonths(this, amount);
    case 'quarters': case 'q': return dateFns.addQuarters(this, amount);
    case 'years': case 'y': return dateFns.addYears(this, amount);
  }
}

Date.prototype.substract = function (this: Date, amount: number, key: string) {
  switch (key) {
    case 'milliseconds': case 'ms': return dateFns.subMilliseconds(this, amount);
    case 'seconds': case 's': return dateFns.subSeconds(this, amount);
    case 'minutes': case 'm': return dateFns.subMinutes(this, amount);
    case 'hours': case 'h': return dateFns.subHours(this, amount);
    case 'days': case 'd': return dateFns.subDays(this, amount);
    case 'weeks': case 'w': return dateFns.subWeeks(this, amount);
    case 'months': case 'M': return dateFns.subMonths(this, amount);
    case 'quarters': case 'q': return dateFns.subQuarters(this, amount);
    case 'years': case 'y': return dateFns.subYears(this, amount);
  }
}

Date.prototype.diff = function (this: Date, dateToCompare: Date, key: string) {
  switch (key) {
    case 'milliseconds': case 'ms': return dateFns.differenceInMilliseconds(this, dateToCompare);
    case 'seconds': case 's': return dateFns.differenceInSeconds(this, dateToCompare);
    case 'minutes': case 'm': return dateFns.differenceInMinutes(this, dateToCompare);
    case 'hours': case 'h': return dateFns.differenceInHours(this, dateToCompare);
    case 'days': case 'd': return dateFns.differenceInDays(this, dateToCompare);
    case 'weeks': case 'w': return dateFns.differenceInWeeks(this, dateToCompare);
    case 'months': case 'M': return dateFns.differenceInMonths(this, dateToCompare);
    case 'quarters': case 'q': return dateFns.differenceInQuarters(this, dateToCompare);
    case 'years': case 'y': return dateFns.differenceInYears(this, dateToCompare);
  }
}

Date.prototype.startOf = function (this: Date, key: string) {
  switch (key) {
    case 'second': case 's': return dateFns.startOfSecond(this);
    case 'minute': case 'm': return dateFns.startOfMinute(this);
    case 'hour': case 'h': return dateFns.startOfHour(this);
    case 'day': case 'd': return dateFns.startOfDay(this);
    case 'week': case 'w': return dateFns.startOfWeek(this);
    case 'month': case 'M': return dateFns.startOfMonth(this);
    case 'quarter': case 'q': return dateFns.startOfQuarter(this);
    case 'year': case 'y': return dateFns.startOfYear(this);
  }
}

Date.prototype.endOf = function (this: Date, key: string) {
  switch (key) {
    case 'second': case 's': return dateFns.endOfSecond(this);
    case 'minute': case 'm': return dateFns.endOfMinute(this);
    case 'hour': case 'h': return dateFns.endOfHour(this);
    case 'day': case 'd': return dateFns.endOfDay(this);
    case 'week': case 'w': return dateFns.endOfWeek(this);
    case 'month': case 'M': return dateFns.endOfMonth(this);
    case 'quarter': case 'q': return dateFns.endOfQuarter(this);
    case 'year': case 'y': return dateFns.endOfYear(this);
  }
}