import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@roxie/components';

export function BarChartExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/charts">Charts</Link></li>
      <li className="breadcrumb-item">Bar Charts</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
      </div>
    </Container>
  </Container>
}