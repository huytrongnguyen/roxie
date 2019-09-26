import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';

export function ComponentConcept() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="card card-body mb-3">
          <h2>Components</h2>
          <h3>Importing Components from <code>@roxie/components</code></h3>
          <p>All Roxie components can be imported <code>@roxie/components</code> packages using ECMAScript module syntax. For example:</p>
          <Highlight language="js">{`
import { Container } from '@roxie/components';
          `}</Highlight>
        </div>
      </div>
    </div>
  </Fragment>
}