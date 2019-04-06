import React, { Fragment, createElement, ComponentType } from 'react';
import { render } from 'react-dom';

import { classNames } from '@roxie/components';

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

export function RouteLink(props: any) {
  const { to = '', className = '', activeClassName = 'active', text = '', children, ...others } = props,
        currentRoute = window.location.hash.substring(1) || '/',
        isActive = to === currentRoute,
        cls = classNames('nav-link', className, { [activeClassName]: isActive });
  return <a href={to ? `#${to}` : 'javascript:void(0)'} className={cls} {...others}>{text || children}</a>
}