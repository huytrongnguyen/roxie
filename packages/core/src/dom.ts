export class Dom {
  private elements: HTMLElement[];

  constructor(elements: HTMLElement[]) {
    this.elements = elements;
  }

  addClass(name: string) {}

  static get(elementId: string) {
    return new Dom([document.getElementById(elementId)]);
  }

  static query(selector: string) {
    const nodeList = document.querySelectorAll(selector);
    if (!nodeList.length) return new Dom([]);
    const elements: HTMLElement[] = [];
    nodeList.forEach(item => elements.push(item as HTMLElement));
    return new Dom(elements);
  }
}