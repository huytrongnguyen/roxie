import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';

export function PanelExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item">Panels</li>
    </ol>
    <div className="pt-3">
      <div className="container">
        <div className="card">
          <div className="card-header">Basic Panels</div>
          <div className="card-body">
            <div className="card-columns">
              <div className="card mr-1">
                <div className="card-header">Default</div>
                <div className="card-body">the quick brown fox jumps over the lazy dog</div>
              </div>
              <div className="card bg-primary mr-1">
                <div className="card-header">Primary</div>
                <div className="card-body">the quick brown fox jumps over the lazy dog</div>
              </div>
              <div className="card bg-secondary mr-1">
                <div className="card-header">Secondary</div>
                <div className="card-body">the quick brown fox jumps over the lazy dog</div>
              </div>
              <div className="card bg-success mr-1">
                <div className="card-header">Success</div>
                <div className="card-body">the quick brown fox jumps over the lazy dog</div>
              </div>
              <div className="card bg-danger mr-1">
                <div className="card-header">Danger</div>
                <div className="card-body">the quick brown fox jumps over the lazy dog</div>
              </div>
              <div className="card bg-warning mr-1">
                <div className="card-header">Warning</div>
                <div className="card-body">the quick brown fox jumps over the lazy dog</div>
              </div>
              <div className="card bg-info mr-1">
                <div className="card-header">Info</div>
                <div className="card-body">the quick brown fox jumps over the lazy dog</div>
              </div>
              <div className="card bg-light mr-1">
                <div className="card-header">Light</div>
                <div className="card-body">the quick brown fox jumps over the lazy dog</div>
              </div>
              <div className="card bg-dark mr-1">
                <div className="card-header">Dark</div>
                <div className="card-body">the quick brown fox jumps over the lazy dog</div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<div class="card">
  <div class="card-header">Default</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-primary">
  <div class="card-header">Primary</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-secondary">
  <div class="card-header">Secondary</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-success">
  <div class="card-header">Success</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-danger">
  <div class="card-header">Danger</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-warning">
  <div class="card-header">Warning</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-info">
  <div class="card-header">Info</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-light">
  <div class="card-header">Light</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-dark">
  <div class="card-header">Dark</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
            `}</Highlight>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Basic Tab</div>
          <div className="card-body">
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item"><span className="nav-link active">Active Tab</span></li>
                  <li className="nav-item"><span className="nav-link">Inactive Tab</span></li>
                  <li className="nav-item"><span className="nav-link disabled">Disabled Tab</span></li>
                </ul>
              </div>
              <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<div class="card">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item"><span class="nav-link active">Active Tab</span></li>
      <li class="nav-item"><span class="nav-link">Inactive Tab</span></li>
      <li class="nav-item"><span class="nav-link disabled">Disabled Tab</span></li>
    </ul>
  </div>
  <div class="card-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}