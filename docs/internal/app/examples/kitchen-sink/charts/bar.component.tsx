import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function BarChartExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/charts">Charts</Link></li>
      <li className="breadcrumb-item">Bar Charts</li>
    </ol>
    <div className="pt-3">
      <div className="container-fluid">
      </div>
    </div>
  </Fragment>
}