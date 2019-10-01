import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function ComponentExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item">Components</li>
    </ol>
    <div className="pt-3">
      <div className="container">
        <div className="row">
          <div className="col-2"><Link to="/examples/kitchen-sink/components/buttons" className="btn btn-default btn-block">Buttons</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/form-fields" className="btn btn-default btn-block">Form Fields</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/layouts" className="btn btn-default btn-block">Layouts</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/panels" className="btn btn-default btn-block">Panels</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/dialogs" className="btn btn-default btn-block">Dialogs</Link></div>
        </div>
      </div>
    </div>
  </Fragment>
}