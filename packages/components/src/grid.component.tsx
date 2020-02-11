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
  fit?: boolean
}

const SCROLL_WIDTH = getScrollWidth();

export function Grid(props: GridProps) {
  const [gridId] = useState(Roxie.guid('grid-')),
        [columns, setColumns] = useState([] as GridColumnProps[]),
        [data, setData] = useState([]);

  useEffect(() => {
    const subscription = props.store.subscribe(value => setData(value || []));
    setColumns(Children.toArray(props.children).map((child: ReactElement) => child.props));
    const header = $(`#${gridId} .table-header-container`),
          body = $(`#${gridId} .table-body-container`);
    body.on('scroll', function () { header.scrollLeft(body.scrollLeft()) });
    return () => {
      subscription.unsubscribe();
      $(`#${gridId}`).off('scroll');
    }
  }, [])

  return <Container id={gridId} layout="vbox" className={Roxie.classNames('table table-striped table-bordered table-hover fullscreen', props.className)}>
    <div className={Roxie.classNames('table-header-container no-scroll', { 'd-flex': !props.fit })}>
        <Container layout="hbox" className="table-header">
          {columns.map((col, index) => {
            const { headerText, dataIndex, renderer, className, style, ...others } = col;
            return <div key={index} className={Roxie.classNames('table-cell', className)} style={style} {...others}>
              {col.headerText}
            </div>
          })}
          <div style={{width:SCROLL_WIDTH}} />
        </Container>
    </div>
    <div className={Roxie.classNames('table-body-container fullscreen auto-scroll-x scroll-y', { 'd-flex': !props.fit })}>
      <div>
          <Container layout="vbox" className="table-body">
            {data.map((item, rowIndex) => <Container layout="hbox" key={rowIndex} className="table-row">
              {columns.map((col, colIndex) => {
                const { headerText, dataIndex, renderer, className, style, ...others } = col;
                return <div key={colIndex} className={Roxie.classNames('table-cell', className)} style={style} {...others}>
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