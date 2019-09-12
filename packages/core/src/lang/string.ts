interface String {
  decode(): any,
  parseInt(): number,
}

String.prototype.decode = function(this: string) { return JSON.parse(this); }
String.prototype.parseInt = function(this: string) { return parseInt(this, 10); }