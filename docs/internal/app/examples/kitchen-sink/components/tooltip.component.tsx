import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { Container } from '@roxie/components';

export function TooltipExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item">Tooltips</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="card mb-3">
          <div className="card-header">Anchored Tooltips</div>
          <div className="card-body">
            <button type="button" className="btn btn-default mr-1" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
              Tooltip on top
            </button>
            <button type="button" className="btn btn-default mr-1" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              Tooltip on right
            </button>
            <button type="button" className="btn btn-default mr-1" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
              Tooltip on bottom
            </button>
            <button type="button" className="btn btn-default mr-1" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
              Tooltip on left
            </button>
            <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
              Tooltip with HTML
            </button>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
  Tooltip on left
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
            `}</Highlight>
          </div>
        </div>
      </div>
    </Container>
  </Container>
}