import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { DataStore } from '@roxie/core';
import { Container, Chart } from '@roxie/components';

type Browser = {
  month: string,
  data1: number,
  data2: number,
  data3: number,
  data4: number,
  other: number,
}

const BrowserStore = new DataStore<Browser>({
  data: [
    { month: 'Jan', data1: 20, data2: 37, data3: 35, data4: 4, other: 4 },
    { month: 'Feb', data1: 20, data2: 37, data3: 36, data4: 5, other: 2 },
    { month: 'Mar', data1: 19, data2: 36, data3: 37, data4: 4, other: 4 },
    { month: 'Apr', data1: 18, data2: 36, data3: 38, data4: 5, other: 3 },
    { month: 'May', data1: 18, data2: 35, data3: 39, data4: 4, other: 4 },
    { month: 'Jun', data1: 17, data2: 34, data3: 42, data4: 4, other: 3 },
    { month: 'Jul', data1: 16, data2: 34, data3: 43, data4: 4, other: 3 },
    { month: 'Aug', data1: 16, data2: 33, data3: 44, data4: 4, other: 3 },
    { month: 'Sep', data1: 16, data2: 32, data3: 44, data4: 4, other: 4 },
    { month: 'Oct', data1: 16, data2: 32, data3: 45, data4: 4, other: 3 },
    { month: 'Nov', data1: 15, data2: 31, data3: 46, data4: 4, other: 4 },
    { month: 'Dec', data1: 15, data2: 31, data3: 47, data4: 4, other: 3 },
  ]
});

export function LineChartExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/charts">Charts</Link></li>
      <li className="breadcrumb-item">Line Charts</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
      <div className="card mb-3">
          <div className="card-header">Basic Line Chart</div>
          <div className="card-body">
            <Chart  store={BrowserStore}
                    series={{ type: 'line', xField: 'month', yField: ['data1', 'data2', 'data3', 'data4'] }} />
          </div>
          <div className="card-footer">
            <Highlight language="ts">{`
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

function LineChartExample() {
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
    </Container>
  </Container>
}