import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@roxie/components';

export function GridExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item">Grids</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="row">
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/grids/grids" className="btn btn-default btn-block">Grid</Link></div>
          <div className="col-2 mb-2"><Link to="/examples/kitchen-sink/grids/lists" className="btn btn-default btn-block">Lists</Link></div>
        </div>
      </div>
    </Container>
  </Container>
}