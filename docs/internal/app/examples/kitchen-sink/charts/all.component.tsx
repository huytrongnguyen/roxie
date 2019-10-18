import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function ChartExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item">Charts</li>
    </ol>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"><Link to="/examples/kitchen-sink/charts/column" className="btn btn-default btn-block">Column Charts</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/charts/line" className="btn btn-default btn-block">Line Charts</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/charts/area" className="btn btn-default btn-block">Area Charts</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/charts/pie" className="btn btn-default btn-block">Pie Charts</Link></div>
        </div>
      </div>
    </div>
  </Fragment>
}