import React, { HTMLAttributes } from 'react';
import { Roxie } from '@roxie/core';

export function ColumnLayout(props: HTMLAttributes<HTMLDivElement>) {
  return <div className={Roxie.classNames('d-flex flex-row column-layout', props.className)}>{props.children}</div>
}