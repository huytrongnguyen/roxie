import { Singleton } from './injectable';

@Singleton
export class String {
  capitalize = value => value.charAt(0).toUpperCase() + value.slice(1);
}