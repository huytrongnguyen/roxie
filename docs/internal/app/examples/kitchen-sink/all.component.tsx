import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function KitchenSink() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item">All</li>
    </ol>
    <div className="pt-3">
      <div className="container">
        <div className="row">
          <div className="col-2 offset-2"><Link to="/examples/kitchen-sink/components" className="btn btn-secondary btn-block">Components</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/grids" className="btn btn-secondary btn-block">Grids</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/trees" className="btn btn-secondary btn-block">Trees</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/charts" className="btn btn-secondary btn-block">Charts</Link></div>
        </div>
      </div>
    </div>
  </Fragment>
}