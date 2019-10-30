import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { Container } from '@roxie/components';

export function ToolbarExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item">Toolbars</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="card mb-3">
          <div className="card-header">Breadcrumb Toolbar</div>
          <div className="card-body">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/examples/kitchen-sink">Kitchen Sink</a></li>
              <li className="breadcrumb-item"><a href="/examples/kitchen-sink/components">Components</a></li>
              <li className="breadcrumb-item">Toolbars</li>
            </ol>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/examples/kitchen-sink">Kitchen Sink</a></li>
  <li class="breadcrumb-item"><a href="/examples/kitchen-sink/components">Components</a></li>
  <li class="breadcrumb-item">Toolbars</li>
</ol>
            `}</Highlight>
          </div>
        </div>
      </div>
    </Container>
  </Container>
}