export class Sequential {
  constructor(private seed = 1, private increment = 1, private prefix: string) { }

  generate() {
    this.seed += this.increment;
    return this.prefix ? `${this.prefix}${this.seed}` : this.seed;
  }
}

export class Uuid {
  private static pattern = 'xxxxxxxx-xxxx-4xxx-Rxxx-xMxxxxxxxxxx'.split('');
  private static hex = '0123456789abcdef'.split('');

  static generate() {
    const parts = [];
    for (let i = 0; i < this.pattern.length; ++i) {
      let c = this.pattern[i];

      if (c !== '-' && c !== '4') {
          let r = Math.random() * 16;
          r = (c === 'R') ? (r & 3 | 8) : (r | ((c === 'M') ? 1 : 0));
          c = this.hex[r]; // above floors r so always 0-15
      }

      parts[i] = c;
    }

    return parts.join('');
  }
}