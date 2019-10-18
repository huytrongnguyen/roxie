import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function GridExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item">Grids</li>
    </ol>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"><Link to="/examples/kitchen-sink/grids/lists" className="btn btn-default btn-block">Lists</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/grids/grids" className="btn btn-default btn-block">Grid</Link></div>
        </div>
      </div>
    </div>
  </Fragment>
}