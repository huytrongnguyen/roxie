import React, { Fragment, useState, useEffect, HTMLAttributes, PropsWithChildren } from 'react';
import { DataStore, Roxie } from '@roxie/core';

interface ListProps extends HTMLAttributes<HTMLDivElement> {
  store: DataStore<any>,
  render: (item: any) => JSX.Element,
}

export function ListItem(props: PropsWithChildren<any>) {
  return <span className={Roxie.classNames('list-group-item list-group-item-action', props.className)}>{props.children}</span>
}

export function List(props: ListProps) {
  const { className, store, render } = props,
        [data, setData] = useState([]);

  useEffect(() => {
    store.subscribe(value => setData(value || []));
  }, [])

  return <section className={Roxie.classNames('list-group', className)}>
      {data.map((item, index) => <Fragment key={index}>{render(item)}</Fragment>)}
  </section>
}