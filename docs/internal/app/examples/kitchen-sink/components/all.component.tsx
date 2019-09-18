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
          <div className="col-2"><Link to="/examples/kitchen-sink/components/buttons" className="btn btn-secondary btn-block">Buttons</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/dataview" className="btn btn-secondary btn-block">DataView</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/forms" className="btn btn-secondary btn-block">Form Fields</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/layouts" className="btn btn-secondary btn-block">Layouts</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/panels" className="btn btn-secondary btn-block">Panels</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/tabs" className="btn btn-secondary btn-block">Tabs</Link></div>
        </div>
      </div>
    </div>
  </Fragment>
}