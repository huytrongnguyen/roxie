import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function FormFieldExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item">Form Fields</li>
    </ol>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"><Link to="/examples/kitchen-sink/components/form-fields/date" className="btn btn-default btn-block disabled">Date Picker</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/form-fields/dropdown" className="btn btn-default btn-block disabled">Dropdown</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/form-fields/tag" className="btn btn-default btn-block disabled">Tag Field</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/form-fields/field-types" className="btn btn-default btn-block">Field Types</Link></div>
        </div>
      </div>
    </div>
  </Fragment>
}