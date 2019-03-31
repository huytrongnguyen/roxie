import moment from 'moment';

export const DEFAULT_PATTERN = 'YYYY-MM-DD[T]HH:mm:ss';

export const formatDate = (date: any, pattern?: string) => moment(date).utc().format(pattern || DEFAULT_PATTERN);
export const parseDate = (input: any) => moment(input);

export const now = () => moment().utc();
export const nowAsString = (pattern?: string) => now().format(pattern || DEFAULT_PATTERN);