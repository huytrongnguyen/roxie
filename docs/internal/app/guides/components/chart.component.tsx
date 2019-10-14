import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';
import { DataStore } from '@roxie/core';
import { Chart } from '@roxie/components';

type ChartData = {
  name: string,
  data1: number,
  data2: number,
  data3: number,
}

const ChartStore = new DataStore<ChartData>({
  data: [
    { name: 'metric one', data1: 10, data2: 12, data3: 14 },
    { name: 'metric two', data1: 7, data2: 8, data3: 16 },
    { name: 'metric three', data1: 5, data2: 2, data3: 14 },
    { name: 'metric four', data1: 2, data2: 14, data3: 6 },
    { name: 'metric five', data1: 27, data2: 38, data3: 36 },
  ]
});

export function ChartComponent() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Introduction to Charting</h2>
        <p>
          The Chart package consists of a hierarchy of classes that provide data visualization functionality.
          These include series, axes, interactions, and mechanisms for implementing markers and legends.
          This guide provides an overview on how these classes are tied together and what functionality is included in each class.
          The following sections cover the specific axes, series, and interactions.
        </p>
        <h3>The Chart Component Class</h3>
        <p>
          All types of Chart components are extended from the AbstractChart class.
          A Chart component is the container for managing series and axes.
          It is responsible for laying out the series and axes every time the size is changed.
          An implementation of the abstract class must override the performLayout method.
          For example, a Chart needs to respond to the changes of the thickness of the axes and recalculate the series area.
        </p>
        <h3>Chart Component Management</h3>
        <p>A Chart component manages the following items:</p>
        <h4>Series</h4>
        <p>
          Series is an abstract class extended by concrete visualizations, such as Line Series, Bar Series, or Scatter Series.
          The Series class itself contains code that is common to all of these series, such as event handling, highlighting, markers, labels, and so on.
          The following sections describe available series types.
          It also shows a complete series configuration example, including the Chart, Axis, and Series options.
        </p>
        <h5>Area</h5>
        <div className="card mb-3">
          <div className="card-body">
            <Chart  store={ChartStore}
                    series={{ type: 'area', xField: 'name', yField: ['data1', 'data2', 'data3'] }}
                    axes={{ type: 'category', field: 'name', title: 'Sample Values' }} />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React from 'react';
import { DataStore } from '@roxie/core';
import { Chart } from '@roxie/components';

type ChartData = {
  name: string,
  data1: number,
  data2: number,
  data3: number,
}

const ChartStore = new DataStore<ChartData>({
  data: [
    { name: 'metric one', data1: 10, data2: 12, data3: 14 },
    { name: 'metric two', data1: 7, data2: 8, data3: 16 },
    { name: 'metric three', data1: 5, data2: 2, data3: 14 },
    { name: 'metric four', data1: 2, data2: 14, data3: 6 },
    { name: 'metric five', data1: 27, data2: 38, data3: 36 },
  ]
});

function AreaExample() {
  return <Chart store={ChartStore}
                series={{ type: 'area', xField: 'name', yField: ['data1', 'data2', 'data3'] }} />
}
            `}</Highlight>
          </div>
        </div>
        <h5>Bar</h5>
        <div className="card mb-3">
          <div className="card-body">
            <Chart  store={ChartStore}
                    series={{ type: 'bar', xField: 'name', yField: ['data1'] }} />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React from 'react';
import { DataStore } from '@roxie/core';
import { Chart } from '@roxie/components';

type ChartData = {
  name: string,
  data1: number,
  data2: number,
  data3: number,
}

const ChartStore = new DataStore<ChartData>({
  data: [
    { name: 'metric one', data1: 10, data2: 12, data3: 14 },
    { name: 'metric two', data1: 7, data2: 8, data3: 16 },
    { name: 'metric three', data1: 5, data2: 2, data3: 14 },
    { name: 'metric four', data1: 2, data2: 14, data3: 6 },
    { name: 'metric five', data1: 27, data2: 38, data3: 36 },
  ]
});

function BarExample() {
  return <Chart store={ChartStore}
                series={{ type: 'bar', xField: 'name', yField: ['data1'] }} />
}
            `}</Highlight>
          </div>
        </div>
        <h5>Line</h5>
        <div className="card mb-3">
          <div className="card-body">
            <Chart  store={ChartStore}
                    series={{ type: 'line', xField: 'name', yField: ['data1', 'data2'] }} />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React from 'react';
import { DataStore } from '@roxie/core';
import { Chart } from '@roxie/components';

type ChartData = {
  name: string,
  data1: number,
  data2: number,
  data3: number,
}

const ChartStore = new DataStore<ChartData>({
  data: [
    { name: 'metric one', data1: 10, data2: 12, data3: 14 },
    { name: 'metric two', data1: 7, data2: 8, data3: 16 },
    { name: 'metric three', data1: 5, data2: 2, data3: 14 },
    { name: 'metric four', data1: 2, data2: 14, data3: 6 },
    { name: 'metric five', data1: 27, data2: 38, data3: 36 },
  ]
});

function LineExample() {
  return <Chart store={ChartStore}
                series={{ type: 'bar', xField: 'name', yField: ['data1', 'data2'] }} />
}
            `}</Highlight>
          </div>
        </div>
        <h5>Pie</h5>
        <div className="card mb-3">
          <div className="card-body">
            <Chart  store={ChartStore}
                    series={{ type: 'pie', xField: 'name', yField: ['data1'] }} />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React from 'react';
import { DataStore } from '@roxie/core';
import { Chart } from '@roxie/components';

type ChartData = {
  name: string,
  data1: number,
  data2: number,
  data3: number,
}

const ChartStore = new DataStore<ChartData>({
  data: [
    { name: 'metric one', data1: 10, data2: 12, data3: 14 },
    { name: 'metric two', data1: 7, data2: 8, data3: 16 },
    { name: 'metric three', data1: 5, data2: 2, data3: 14 },
    { name: 'metric four', data1: 2, data2: 14, data3: 6 },
    { name: 'metric five', data1: 27, data2: 38, data3: 36 },
  ]
});

function PieExample() {
  return <Chart store={ChartStore}
                series={{ type: 'bar', xField: 'name', yField: ['data1'] }} />
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}