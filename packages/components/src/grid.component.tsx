import React, { useState, useEffect, HTMLAttributes, PropsWithChildren, Children } from 'react';
import { DataStore, Roxie } from '@roxie/core';

import { Container } from './container.component';

interface GridColumnProps extends HTMLAttributes<HTMLDivElement> {
  headerText: string,
  dataIndex: string,
}

export function Column(props: GridColumnProps) {
  return null;
}

interface GridProps extends PropsWithChildren<any> {
  store: DataStore<any>,
}

export function Grid(props: GridProps) {
  const [columns, setColumns] = useState([] as GridColumnProps[]),
        [data, setData] = useState([]);

  useEffect(() => {
    const subscription = props.store.subscribe(value => setData(value || []));
    setColumns(Children.toArray(props.children).map(child => child.props));
    return () => subscription.unsubscribe();
  }, [])

  return <Container layout="vbox" className="table table-striped table-bordered table-hover fullscreen">
    <Container layout="hbox" className="table-header">
      {columns.map((col, index) => {
        const { headerText, dataIndex, className, ...others } = col;
        return <div key={index} className={Roxie.classNames('table-cell', className)} style={{flex:1}} {...others}>
          {col.headerText}
        </div>
      })}
    </Container>
    <Container layout="vbox" className="table-body flex-fill fullscreen">
      {data.map((item, rowIndex) => <Container layout="hbox" key={rowIndex} className="table-row">
        {columns.map((col, colIndex) => {
          const { headerText, dataIndex, className, ...others } = col;
          return <div key={colIndex} className={Roxie.classNames('table-cell', className)} style={{flex:1}} {...others}>
            {item[col.dataIndex]}
          </div>
        })}
      </Container>)}
    </Container>
  </Container>
}