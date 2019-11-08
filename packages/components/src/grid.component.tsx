import React, { useState, useEffect, HTMLAttributes, PropsWithChildren, Children, ReactElement } from 'react';
import { DataStore, Roxie } from '@roxie/core';

import { Container } from './container.component';

interface GridColumnProps extends HTMLAttributes<HTMLDivElement> {
  headerText: string,
  dataIndex: string,
  renderer?: (value: any, record: any, rowIndex: number, colIndex: number, store: DataStore<any>) => string | ReactElement,
}

export function Column(props: GridColumnProps) {
  return null;
}

interface GridProps extends PropsWithChildren<any> {
  store: DataStore<any>,
  className?: string,
}

export function Grid(props: GridProps) {
  const [columns, setColumns] = useState([] as GridColumnProps[]),
        [data, setData] = useState([]);

  useEffect(() => {
    const subscription = props.store.subscribe(value => setData(value || []));
    setColumns(Children.toArray(props.children).map(child => child.props));
    return () => subscription.unsubscribe();
  }, [])

  return <Container layout="vbox" className={Roxie.classNames('table table-striped table-bordered table-hover fullscreen', props.className)}>
    <Container layout="hbox" className="table-header">
      {columns.map((col, index) => {
        const { headerText, dataIndex, renderer, className, ...others } = col;
        return <div key={index} className={Roxie.classNames('table-cell', className)} style={{flex:1}} {...others}>
          {col.headerText}
        </div>
      })}
    </Container>
    <Container layout="vbox" className="table-body flex-fill fullscreen">
      {data.map((item, rowIndex) => <Container layout="hbox" key={rowIndex} className="table-row">
        {columns.map((col, colIndex) => {
          const { headerText, dataIndex, renderer, className, ...others } = col;
          return <div key={colIndex} className={Roxie.classNames('table-cell', className)} style={{flex:1}} {...others}>
            {renderer ? renderer(item[col.dataIndex], item, rowIndex, colIndex, props.store) : item[col.dataIndex]}
          </div>
        })}
      </Container>)}
    </Container>
  </Container>
}