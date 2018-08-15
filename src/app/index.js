import React from 'react';
import { render } from 'react-dom';
import Ext from '~/roxie/core/ext';

export const RoxieApplication = Viewport => {
  const root = Ext.createElement('<div id="react-root"></div>');
  document.body.appendChild(root);
  render(<Viewport />, root);
}