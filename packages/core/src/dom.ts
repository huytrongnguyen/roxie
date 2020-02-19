import { Roxie } from './roxie';

export class Dom {
  private elements: HTMLElement[];

  constructor(elements: HTMLElement[]) {
    this.elements = elements;
  }

  each(fn: (el: HTMLElement, idx: number, elements: HTMLElement[]) => void) { this.elements.forEach(fn); }
  match(target: HTMLElement) { return this.elements.includes(target) };

  addClass(...classNames: string[]) {
    this.each(el => el.classList.add(...classNames));
    return this;
  }

  removeClass(...classNames: string[]) {
    this.each(el => el.classList.remove(...classNames));
    return this;
  }

  toggleClass(className: string) {
    this.each(el => el.classList.toggle(className));
    return this;
  }

  trigger(eventType: string, extraParameters: any = {}) {
    this.each(el => el.dispatchEvent(new CustomEvent(eventType, { detail: extraParameters })));
    return this;
  }

  on(eventType: string, handler: (event: Event) => void): void;
  on(eventType: string, selector: string, handler: (event: Event) => void): void;
  on(eventType: string, ...args: any[]) {
    document.addEventListener(eventType, e => {
      let selector: Dom,
        handler: (event: Event) => void;

      if (args.length < 2) { selector = this; handler = args[0] }
      else { selector = Dom.query(args[0]); handler = args[1]; }

      const el = e.target as HTMLElement;
      selector.match(el) && handler(e);
    });
    return this;
  }

  static get(elementId: string) {
    return new Dom([document.getElementById(elementId)]);
  }

  static query(selector: string): Dom;
  static query(selector: HTMLElement): Dom;
  static query(selector: any) {
    if (Roxie.isString(selector)) {
      const nodeList = document.querySelectorAll(selector);
      if (!nodeList.length) return new Dom([]);
      const elements: HTMLElement[] = [];
      nodeList.forEach(item => elements.push(item as HTMLElement));
      return new Dom(elements);
    } else {
      return new Dom([selector]);
    }
  }
}