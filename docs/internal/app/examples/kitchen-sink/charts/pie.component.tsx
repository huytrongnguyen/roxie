import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { DataStore } from '@roxie/core';
import { Container, Chart } from '@roxie/components';

type MobileOS = {
  os: string,
  data1: number,
}

const MobileOSStore = new DataStore<MobileOS>({
  data: [
    { os: 'Android', data1: 68.3 },
    { os: 'BlackBerry', data1: 1.7 },
    { os: 'iOS', data1: 17.9 },
    { os: 'Windows Phone', data1: 10.2 },
    { os: 'Others', data1: 1.9 },
  ]
});

export function PieChartExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/charts">Charts</Link></li>
      <li className="breadcrumb-item">Pie Charts</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="card mb-3">
          <div className="card-header">Basic Pie Chart</div>
          <div className="card-body">
            <Chart  store={MobileOSStore}
                    series={{ type: 'pie', xField: 'os', yField: ['data1'] }} />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React from 'react';
import { DataStore } from '@roxie/core';
import { Chart } from '@roxie/components';

type MobileOS = {
  os: string,
  data1: number,
}

const MobileOSStore = new DataStore<MobileOS>({
  data: [
    { os: 'Android', data1: 68.3 },
    { os: 'BlackBerry', data1: 1.7 },
    { os: 'iOS', data1: 17.9 },
    { os: 'Windows Phone', data1: 10.2 },
    { os: 'Others', data1: 1.9 },
  ]
});

function PieChartExample() {
  return <Chart store={MobileOSStore}
                series={{ type: 'pie', xField: 'os', yField: ['data1'] }} />
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </Container>
  </Container>
}