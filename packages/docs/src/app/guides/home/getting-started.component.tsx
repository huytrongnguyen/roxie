import React, { Fragment, useEffect, useState } from 'react';
import Highlight from 'react-highlight.js';
import { Roxie } from '@roxie/core';

export function GettingStarted() {
  const [themeCode, setThemeCode] = useState('');

  useEffect(() => {
    setThemeCode(Roxie.Cache.get('roxie-theme'));
  }, [])

  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Getting Started with Roxie</h2>
        <p>This guide will show you how to add Roxie to your application.</p>
        <h3>Requirements</h3>
        <dl>
          <dt>Vanilla application requires the following:</dt>
          <dd><code>@roxie/core</code></dd>
          <dd><code>@roxie/ui</code></dd>
          <dt>React 16.9+ application requires the following:</dt>
          <dd><code>react</code></dd>
          <dd><code>react-dom</code></dd>
          <dd><code>@roxie/components</code></dd>
        </dl>
        <h3>Updating <code>index.html</code></h3>
        <div className="card card-footer mb-3">
          <Highlight language="html">{`
<!doctype html>
<html lang="en" class="${themeCode}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="node_modules/@roxie/ui/dist/css/roxie-ui.css" />
  <link rel="stylesheet" href="node_modules/@roxie/ui/dist/css/${themeCode}.css" />
  ...
</head>
<body>
<script src="node_modules/@roxie/ui/dist/js/roxie-ui.js"></script>
</body>
</html>
        `}</Highlight>
        </div>
        <h3>Adding Roxie to an Existing React Application</h3>

        <p>Updating <code>body</code></p>
        <div className="card card-footer mb-3">
          <Highlight language="html">{`
<body>
  <script src="node_modules/@roxie/ui/dist/js/roxie-ui.js"></script>
  <script src="main.tsx"></script>
</body>
        `}</Highlight>
        </div>
        <p>Launching your Application</p>
        <div className="card card-footer mb-3">
          <Highlight language="tsx">{`
import React from 'react';
import { launch } from '@roxie/components';

import { App } from './app/app.component';

launch(<App />);
        `}</Highlight>
        </div>
      </div>
    </div>
  </Fragment>
}