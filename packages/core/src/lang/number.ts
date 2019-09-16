interface Number {
  round(): number,
  ceil(): number,
  floor(): number,
  format(decimal?: number): string,
  percentage(decimal?: number): string,
}

Number.prototype.round = function(this: number) { return Math.round(this); }
Number.prototype.ceil = function(this: number) { return Math.ceil(this); }
Number.prototype.floor = function(this: number) { return Math.floor(this); }
Number.prototype.format = function(this: number, decimal: number = 0) { return (this || 0).toLocaleString('en', { maximumFractionDigits: decimal }); }
Number.prototype.percentage = function(this: number, decimal: number = 0) { return `${((this || 0) * 100).format(decimal)}%`; }