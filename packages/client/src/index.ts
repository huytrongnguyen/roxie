import { Fragment, createElement, ComponentType } from 'react';
import { render } from 'react-dom';

interface AppConfig {
  viewport?: ComponentType<any>;
  components?: any[];
}

export function launchApplication(config: AppConfig = {}) {
  const { viewport = Fragment } = config,
        root = document.createElement('div');

  root.id = 'app-root';
  document.body.appendChild(root);
  render(createElement(viewport), root);
}