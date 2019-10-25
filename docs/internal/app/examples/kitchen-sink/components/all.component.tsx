import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@roxie/components';

export function ComponentExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item">Components</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="row">
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/components/buttons" className="btn btn-default btn-block">Buttons</Link></div>
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/components/form-fields" className="btn btn-default btn-block">Form Fields</Link></div>
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/components/forms" className="btn btn-default btn-block">Forms</Link></div>
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/components/layouts" className="btn btn-default btn-block">Layouts</Link></div>
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/components/panels" className="btn btn-default btn-block">Panels</Link></div>
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/components/tabs" className="btn btn-default btn-block">Tabs</Link></div>
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/components/dialogs" className="btn btn-default btn-block">Dialogs</Link></div>
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/components/tooltips" className="btn btn-default btn-block">Tooltips</Link></div>
        </div>
      </div>
    </Container>
  </Container>
}