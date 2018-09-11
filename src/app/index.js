import { render } from 'react-dom';
import { Dom } from '~/core';

export const RoxieApplication = config => mainView => {
  const root = Dom.createElement('<div id="app-root"></div>');
  document.body.appendChild(root);
  render(mainView, root);
}

export * from './components';