import React from 'react';

import { classNames } from './common';

export function Link(props: any) {
  const { to = '', className = '', text = '', children, ...others } = props;
  return <a href={to || 'javascript:void(0)'} className={classNames('nav-link', className)} {...others}>
    {text || children}
  </a>
}

export * from './common';