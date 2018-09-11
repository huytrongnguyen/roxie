import React from 'react';

export const Link = ({ to = 'javascript:void(0)', text, children, ...others }) => {
  return <a href={to} {...others}>{text || children}</a>
}