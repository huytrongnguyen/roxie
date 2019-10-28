import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';

export function StringApi() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>String</h2>
        <h3>Methods</h3>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>parseInt()</code></pre></div>
          <div className="card-body">{'12345'.parseInt()}</div>
          <div className="card-footer">
            <Highlight language="ts">{`'12345'.parseInt()`}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>parseDate(pattern?: string, backupDate?: Date)</code></pre></div>
          <div className="card-body">{'2006-01-15 03:20:01'.parseDate().format('dd/MM/yyyy HH:mm:ss')}</div>
          <div className="card-footer">
            <Highlight language="ts">{`'2006-01-15 03:20:01'.parseDate().format('dd/MM/yyyy HH:mm:ss')`}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}