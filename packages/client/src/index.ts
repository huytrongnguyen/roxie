import { Fragment, createElement, ComponentType } from 'react';
import { render } from 'react-dom';

interface AppConfig {
  viewport?: ComponentType<any>;
  components?: any[];
}

/**
 * Loads Ext.app.Application class and starts it up with given configuration after the page is ready.
 * @param config Application config object
 */
export function launchApplication(config: AppConfig = {}) {
  const { viewport = Fragment } = config,
        root = document.createElement('div');

  root.id = 'app-root';
  document.body.appendChild(root);
  render(createElement(viewport), root);
}

export * from './route';