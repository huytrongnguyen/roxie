import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">1. Introduction</div>
              <div className="card-body">
                <p>Learn about the basics of app building with Roxie</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-header">2. Core Concepts</div>
              <div className="card-body">
                <p>Start learning the core concepts of Roxie</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-header">3. Components</div>
              <div className="card-body">
                <p>Dig into the most common Roxie components</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-header">4. Application Architecture</div>
              <div className="card-body">
                <p>Architect-ing your application</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-header">5. Roxie Themes</div>
              <div className="card-body">
                <p>Explore how to style your Ext JS application</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-header">6. Examples</div>
              <div className="card-body">
                <dl>
                  <dt>Sample Applications</dt>
                  <dd>Admin Dashboard</dd>
                  <dt>Combination Examples</dt>
                  <dd><Link to="/examples/kitchen-sink">Kitchen Sink</Link></dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}