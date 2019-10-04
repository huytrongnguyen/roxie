import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function KitchenSink() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item">All</li>
    </ol>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"><Link to="/examples/kitchen-sink/components" className="btn btn-default btn-block">Components</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/grids" className="btn btn-default btn-block disabled">Grids</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/trees" className="btn btn-default btn-block">Trees</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/charts" className="btn btn-default btn-block disabled">Charts</Link></div>
        </div>
      </div>
    </div>
  </Fragment>
}