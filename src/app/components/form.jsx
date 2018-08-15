import React from 'react';

export const Link = ({ text, children, ...others }) => <a href="javascript:void(0)" {...others}>{text || children}</a>