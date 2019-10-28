import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';

export function NumberApi() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Number</h2>
        <h3>Methods</h3>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>format(decimal: number)</code></pre></div>
          <div className="card-body">{0.12345.format(2)}</div>
          <div className="card-footer">
            <Highlight language="ts">{`0.12345.format(2)`}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>round()</code></pre></div>
          <div className="card-body">{0.12345.round()}</div>
          <div className="card-footer">
            <Highlight language="ts">{`0.12345.round()`}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>ceil()</code></pre></div>
          <div className="card-body">{0.12345.ceil()}</div>
          <div className="card-footer">
            <Highlight language="ts">{`0.12345.ceil()`}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>floor()</code></pre></div>
          <div className="card-body">{0.12345.floor()}</div>
          <div className="card-footer">
            <Highlight language="ts">{`0.12345.floor()`}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>percentage(decimal: number)</code></pre></div>
          <div className="card-body">{0.12345.percentage(2)}</div>
          <div className="card-footer">
            <Highlight language="ts">{`0.12345.percentage(2)`}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}