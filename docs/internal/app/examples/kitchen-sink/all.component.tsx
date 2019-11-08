import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@roxie/components';

export function KitchenSink() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="row">
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/components" className="btn btn-default btn-block">Components</Link></div>
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/grids" className="btn btn-default btn-block">Grids</Link></div>
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/charts" className="btn btn-default btn-block">Charts</Link></div>
        </div>
      </div>
    </Container>
  </Container>
}