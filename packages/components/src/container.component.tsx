import React, { HTMLAttributes } from 'react';
import { Roxie } from '@roxie/core';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  layout?: string,
}

const layoutClass = {
  '': '',
  'column': 'd-flex flex-row column-layout',
  'hbox': 'd-flex flex-row',
  'vbox': 'd-flex flex-column',
}

export function Container(props: ContainerProps) {
  const { layout = '' } = props;

  return <div {...props} className={Roxie.classNames(layoutClass[layout], props.className)}>
    {props.children}
  </div>
}