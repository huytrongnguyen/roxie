import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';

export function GettingStarted() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="card card-body mb-3">
          <h2>Getting Started with Roxie</h2>
          <p>This guide will show you how to add Roxie to your application.</p>
          <h3>Requirements</h3>
          <dl>
            <dt>Vanilla application requires the following:</dt>
            <dd><code>@roxie/core</code></dd>
            <dd><code>@roxie/ui</code></dd>
            <dt>React application requires the following:</dt>
            <dd><code>@roxie/components</code></dd>
          </dl>
          <h3>Updating index.html</h3>
          <Highlight language="html">{`
<!doctype html>
<html lang="en" class="roxie-theme-light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <link rel="stylesheet" href="node_modules/@roxie/ui/roxie-theme-light.css" />
  ...
</head>
<body>
  ...
</body>
</html>
          `}</Highlight>
        </div>
      </div>
    </div>
  </Fragment>
}