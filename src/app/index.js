import React from 'react';
import { render } from 'react-dom';
import { Dom } from '~/core';

export const application = config => {
  const mainView = config.mainView || <div />,
        root = Dom.createElement('<div id="app-root"></div>');
  document.body.appendChild(root);
  render(mainView, root);
}

export * from './components';