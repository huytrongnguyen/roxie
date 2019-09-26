import React, { Fragment, PropsWithChildren, ReactNode, createElement, ReactElement } from 'react';
import { render } from 'react-dom';

export * from './container.component';
export * from './dialog.component';
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