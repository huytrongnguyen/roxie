import React, { Fragment, PropsWithChildren, ReactElement } from 'react';
import { render } from 'react-dom';

export * from './container.component';
export * from './dialog.component';
export * from './dropdown.component';
export * from './tabpanel.component';
export * from './list.component';
export * from './grid.component';
export * from './chart.component';

export function Viewport(props: PropsWithChildren<any>) {
  return <Fragment>{props.children}</Fragment>
}

export function launch(viewport: ReactElement) {
  const root = document.createElement('div');
  root.id = 'react-root';
  document.body.appendChild(root);
  render(viewport, root);
}