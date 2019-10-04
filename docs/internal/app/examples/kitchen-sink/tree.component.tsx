import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';

export function TreeExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item">Trees</li>
    </ol>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="card mb-3">
          <div className="card-header">List</div>
          <div className="card-body">
            <div className="list-group">
              <span className="list-group-item list-group-item-action active">Quisque hendrerit orci</span>
              <span className="list-group-item list-group-item-action">Maecenas dignissim iaculis</span>
              <span className="list-group-item list-group-item-action">Aenean ligula neque</span>
              <span className="list-group-item list-group-item-action">In rutrum ante tincidunt</span>
              <span className="list-group-item list-group-item-action disabled">Curabitur mollis suscipit quam</span>
              <span className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</span>
              <span className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</span>
              <span className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</span>
              <span className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</span>
              <span className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</span>
              <span className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</span>
              <span className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</span>
              <span className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</span>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<div class="list-group">
  <span class="list-group-item list-group-item-action active">Quisque hendrerit orci</span>
  <span class="list-group-item list-group-item-action">Maecenas dignissim iaculis</span>
  <span class="list-group-item list-group-item-action">Aenean ligula neque</span>
  <span class="list-group-item list-group-item-action">In rutrum ante tincidunt</span>
  <span class="list-group-item list-group-item-action disabled">Curabitur mollis suscipit quam</span>
  <span class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</span>
  <span class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</span>
  <span class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</span>
  <span class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</span>
  <span class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</span>
  <span class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</span>
  <span class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</span>
  <span class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</span>
</div>
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}