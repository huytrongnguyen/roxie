import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { Container, FileField } from '@roxie/components';

export function FileUploadExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components/form-fields">Form Fields</Link></li>
      <li className="breadcrumb-item">File Uploads</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="card mb-3">
          <div className="card-header">Basic File Field</div>
          <div className="card-body">
            <FileField />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React from 'react';
import { FileField } from '@roxie/components';

function Example() {
  return <FileField />
}
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Button Only</div>
          <div className="card-body">
            <FileField buttonOnly />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React from 'react';
import { FileField } from '@roxie/components';

function Example() {
  return <FileField buttonOnly />
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </Container>
  </Container>
}