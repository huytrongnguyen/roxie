import React, { useState, useEffect, HTMLAttributes, PropsWithChildren, Children, ReactElement } from 'react';
import { DataStore, Roxie } from '@roxie/core';
import $ from 'jquery';

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

const SCROLL_WIDTH = getScrollWidth();

export function Grid(props: GridProps) {
  const [gridId] = useState(Roxie.guid('grid-')),
        [columns, setColumns] = useState([] as GridColumnProps[]),
        [data, setData] = useState([]);

  useEffect(() => {
    const subscription = props.store.subscribe(value => setData(value || []));
    setColumns(Children.toArray(props.children).map(child => child.props));
    const header = $(`#${gridId} .table-header-viewport`),
          body = $(`#${gridId} .table-body-viewport`);
    $(`#${gridId} .table-body-viewport`).on('scroll', function () { header.scrollLeft(body.scrollLeft()) });
    return () => {
      subscription.unsubscribe();
      $(`#${gridId}`).off('scroll');
    }
  }, [])

  return <Container id={gridId} layout="vbox" className={Roxie.classNames('table table-striped table-bordered table-hover fullscreen', props.className)}>
    <div className="table-header-viewport d-flex no-scroll">
      <div className="table-header-container d-flex">
        <Container layout="hbox" className="table-header">
          {columns.map((col, index) => {
            const { headerText, dataIndex, renderer, className, ...others } = col;
            return <div key={index} className={Roxie.classNames('table-cell', className)} style={{flex:1}} {...others}>
              {col.headerText}
            </div>
          })}
          <div style={{width:SCROLL_WIDTH}} />
        </Container>
      </div>
    </div>
    <div className="table-body-viewport d-flex fullscreen auto-scroll-x scroll-y">
      <div>
        <Container layout="vbox" className="table-body">
          {data.map((item, rowIndex) => <Container layout="hbox" key={rowIndex} className="table-row">
            {columns.map((col, colIndex) => {
              const { headerText, dataIndex, renderer, className, ...others } = col;
              return <div key={colIndex} className={Roxie.classNames('table-cell', className)} style={{flex:1}} {...others}>
                {renderer ? renderer(item[col.dataIndex], item, rowIndex, colIndex, props.store) : item[col.dataIndex]}
              </div>
            })}
          </Container>)}
        </Container>
      </div>
    </div>
  </Container>
}

export function getScrollWidth() {
  const outer = $('<div style="visibility: hidden; width: 100px; overflow: scroll;"></div>');
  $('body').append(outer);
  const widthNoScroll = outer.width();

  // add innerdiv
  const inner = $('<div style="width: 100%;"></div>');
  outer.append(inner);
  const widthWithScroll = inner.width();

  // remove divs
  outer.remove();

  return widthNoScroll - widthWithScroll;
}