import { ReactElement } from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export * from './container.component';
export * from './dialog.component';
export * from './dropdown.component';
export * from './datepicker.component';
export * from './tabpanel.component';
export * from './list.component';
export * from './grid.component';
export * from './paging.component';
export * from './chart.component';
export * from './file-field.component';

export function launch(viewport: ReactElement) {
  const root = document.createElement('div');
  root.id = 'react-root';
  document.body.appendChild(root);
  render(viewport, root);
}

$(function() {
  // $(document).on('click', '.dropdown-toggle', function(e) { console.log('.dropdown-toggle'); $(e.target).parent('.dropdown').children('.dropdown-menu').slideToggle() });
  // $(document).on('click', e => { console.log('click outside'); $('.dropdown-menu').slideToggle() });
  // $(document).on('click', '.dropdown-item', e => { console.log('click inside'); $('.dropdown-menu').slideUp() });
  // $(document).on('click', '.dropdown-multi-select .dropdown-item', e => { console.log('.dropdown-multi-select'); e.stopPropagation(); });
  // $(document).on('click.bs.dropdown.data-api', '.dropdown', function(e) { console.log($(e.target).hasClass('dropdown-multi-select')); return !$(e.target).hasClass('dropdown-multi-select') });
});