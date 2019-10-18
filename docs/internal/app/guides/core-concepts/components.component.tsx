import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';

export function ComponentConcept() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Components</h2>
        <h3>Importing Components from <code>@roxie/components</code></h3>
        <p>
          An Roxie application's UI is made up of one or many widgets called Components.
          All Components are subclasses of the React Component class which allows them to participate in automated lifecycle management including instantiation, rendering, and destruction.
          Roxie provides a wide range of useful Components out of the box.
          All Roxie Components can be imported via <code>@roxie/components</code> packages using ECMAScript module syntax. For example:</p>
        <div className="card card-footer">
          <Highlight language="tsx">{`
import { Container } from '@roxie/components';
          `}</Highlight>
        </div>
      </div>
    </div>
  </Fragment>
}