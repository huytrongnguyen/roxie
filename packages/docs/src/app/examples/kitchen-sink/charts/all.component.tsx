import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@roxie/components';

export function ChartExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item">Charts</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="row">
          <div className="col-2"><Link to="/examples/kitchen-sink/charts/column" className="btn btn-default btn-block">Column Charts</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/charts/line" className="btn btn-default btn-block">Line Charts</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/charts/area" className="btn btn-default btn-block">Area Charts</Link></div>
          <div className="col-2"><Link to="/examples/kitchen-sink/charts/pie" className="btn btn-default btn-block">Pie Charts</Link></div>
        </div>
      </div>
    </Container>
  </Container>
}