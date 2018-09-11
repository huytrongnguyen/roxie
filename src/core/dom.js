import { Singleton } from './injectable';

@Singleton
export class Dom {
  createElement(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
  }

  className(...expressions) {
    const cls = [];

    expressions.forEach(exp => {
      if (!exp) {
        return;
      }

      if (typeof exp === 'string') {
        cls.push(exp);
      } else if (typeof exp === 'object') {
        for (let key in exp) {
          if (exp[key] === true) {
            cls.push(key);
          }
        }
      }
    });

    return cls.join(' ');
  }
}