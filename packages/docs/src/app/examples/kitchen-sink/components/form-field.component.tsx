import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@roxie/components';

export function FormFieldExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item">Form Fields</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="row">
          <div className="col-2"><Link to="/examples/kitchen-sink/components/form-fields/date" className="btn btn-default btn-block">Date Picker</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/form-fields/dropdown" className="btn btn-default btn-block">Dropdown</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/form-fields/file-uploads" className="btn btn-default btn-block">File Uploads</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/components/form-fields/field-types" className="btn btn-default btn-block">Field Types</Link></div>
        </div>
      </div>
    </Container>
  </Container>
}