interface Number {
  round(): number,
  ceil(): number,
  floor(): number,
}

Number.prototype.round = function(this: number) { return Math.round(this); }
Number.prototype.ceil = function(this: number) { return Math.ceil(this); }
Number.prototype.floor = function(this: number) { return Math.floor(this); }