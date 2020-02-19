import { Roxie } from '@roxie/core';
import { SelectorEngine } from './dom/selector-engine';

export function domQuery(selector: string) { return SelectorEngine.query(selector); }

Roxie.query('body').on('click', '[data-toggle^="button"]', e => {
  e.preventDefault();
  e.stopPropagation();
  const el = e.target as HTMLElement;console.log({el});
  el.classList.toggle('active');
});

Roxie.query('body').on('click', '[data-toggle^="dropdown"]', e => {
  const el = e.target as HTMLElement;console.log(el);
});