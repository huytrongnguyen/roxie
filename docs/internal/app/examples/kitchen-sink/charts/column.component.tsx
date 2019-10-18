import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { DataStore } from '@roxie/core';
import { Chart } from '@roxie/components';

type Climate = {
  month: string,
  high: number,
  low: number,
}

const ClimateStore = new DataStore<Climate>({
  data: [
    { month: 'Jan', high: 14.7, low: 5.6 },
    { month: 'Feb', high: 16.5, low: 6.6 },
    { month: 'Mar', high: 18.6, low: 7.3 },
    { month: 'Apr', high: 20.8, low: 8.1 },
    { month: 'May', high: 23.3, low: 9.9 },
    { month: 'Jun', high: 26.2, low: 11.9 },
    { month: 'Jul', high: 27.7, low: 13.3 },
    { month: 'Aug', high: 27.6, low: 13.2 },
    { month: 'Sep', high: 26.4, low: 12.1 },
    { month: 'Oct', high: 23.6, low: 9.9 },
    { month: 'Nov', high: 17, low: 6.8 },
    { month: 'Dec', high: 14.7, low: 5.8 },
  ]
});

export function ColumnChartExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/charts">Charts</Link></li>
      <li className="breadcrumb-item">Column Charts</li>
    </ol>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="card mb-3">
          <div className="card-header">Basic Column Chart</div>
          <div className="card-body">
            <div className="card">
              <div className="card-header">Redwood City Climate Data</div>
              <div className="card-body">
                <Chart  store={ClimateStore}
                        series={{ type: 'bar', xField: 'month', yField: ['high'] }} />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React from 'react';
import { DataStore } from '@roxie/core';
import { Chart } from '@roxie/components';

type Climate = {
  month: string,
  high: number,
  low: number,
}

const ClimateStore = new DataStore<Climate>({
  data: [
    { month: 'Jan', high: 14.7, low: 5.6 },
    { month: 'Feb', high: 16.5, low: 6.6 },
    { month: 'Mar', high: 18.6, low: 7.3 },
    { month: 'Apr', high: 20.8, low: 8.1 },
    { month: 'May', high: 23.3, low: 9.9 },
    { month: 'Jun', high: 26.2, low: 11.9 },
    { month: 'Jul', high: 27.7, low: 13.3 },
    { month: 'Aug', high: 27.6, low: 13.2 },
    { month: 'Sep', high: 26.4, low: 12.1 },
    { month: 'Oct', high: 23.6, low: 9.9 },
    { month: 'Nov', high: 17, low: 6.8 },
    { month: 'Dec', high: 14.7, low: 5.8 },
  ]
});

function ColumnChartExample() {
  return <div className="card">
    <div className="card-header">Redwood City Climate Data</div>
    <div className="card-body">
      <Chart  store={ClimateStore}
              series={{ type: 'bar', xField: 'month', yField: ['high'] }} />
    </div>
  </div>
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}