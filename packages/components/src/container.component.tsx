import React, { HTMLAttributes, ReactElement } from 'react';
import { Roxie } from '@roxie/core';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  layout?: string,
  fullscreen?: boolean,
  north?: ReactElement,
  south?: ReactElement,
  west?: ReactElement,
  east?: ReactElement,
  center?: ReactElement,
}

const layoutClass = {
  '': '',
  'hbox': 'd-flex flex-row',
  'vbox': 'd-flex flex-column',
  'column': 'd-flex flex-row column-layout',
  'fit': 'flex-fill fit-layout',
}

export function Container(props: ContainerProps) {
  const { layout = '', north, south, west, east, center, children } = props;

  if (layout === 'border') {
    return <div {...props} className={Roxie.classNames('d-flex flex-column', props.className)}>
      {north}
      <div className="d-flex flex-row flex-fill">
        {west}
        <div className="flex-fill fit-layout">{center || children}</div>
        {east}
      </div>
      {south}
    </div>
  }

  return <div {...props} className={Roxie.classNames(layoutClass[layout], props.fullscreen ? 'fullscreen' : '', props.className)}>
    {props.children}
  </div>
}