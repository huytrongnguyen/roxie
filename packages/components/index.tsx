import React from 'react';

import { classNames } from './common';

export function RouteLink(props: any) {
  const { to = '', className = '', activeClassName = 'active', text = '', children, ...others } = props,
        currentRoute = window.location.hash.substring(1) || '/',
        isActive = to === currentRoute,
        cls = classNames('nav-link', className, { [activeClassName]: isActive });
  return <a href={to ? `#${to}` : 'javascript:void(0)'} className={cls} {...others}>{text || children}</a>
}