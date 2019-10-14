import React, { useState, useEffect } from 'react';
import { generate, ChartConfiguration, ChartAPI } from 'c3';
import { Roxie, DataStore } from '@roxie/core';

export interface ChartProps {
  store: DataStore<any>,
  series: Series,
  axes?: Axes,
}

export interface Series {
  type: string,
  xField?: string,
  yField: string[],
}

export interface Axes {
  type: string,
  field: string,
  title?: string,
  position?: 'inner-right' | 'inner-center' | 'inner-left' | 'outer-right' | 'outer-center' | 'outer-left' | 'inner-top' | 'inner-middle' | 'inner-bottom' | 'outer-top' | 'outer-middle' | 'outer-bottom',
}

export function Chart(props: ChartProps) {
  const { store, series } = props,
        [chartId] = useState(Roxie.guid('chart-')),
        [config] = useState({
          bindto: `#${chartId}`,
          data: {
            json: [],
            keys: { value: series.yField },
            type: series.type,
          },
          bar: { width: { ratio: 0.5 } },
          pie: { expand: false },
        } as c3.ChartConfiguration);

  useEffect(() => {
    store.subscribe(data => {
      if (!data) return;

      config.data.json = data;
      if (series.type === 'pie') {
        config.data.json = data.map(item => {
          return { [item[series.xField]]: item[series.yField[0]] }
        });
        config.data.keys.value = data.map(item => item[series.xField]);
      }
      if (series.xField) {
        config.axis = {
          x: {
            type: 'category',
            categories: data.map(item => item[series.xField]),
          },
        };
      }

      generate(config);
    });
  }, [])

  return <section id={chartId} className='c3' />
}