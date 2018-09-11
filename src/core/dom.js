import { Singleton } from './injectable';

@Singleton
export class Dom {
  createElement(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
  }
}