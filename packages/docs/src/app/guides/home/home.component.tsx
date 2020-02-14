import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return <>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="card mb-3">
              <div className="card-header">1. Introduction</div>
              <div className="card-body">
                <p>Learn about the basics of app building with Roxie</p>
                <dl>
                  <dd><Link to="/introduction/getting-started">Getting Started</Link></dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card mb-3">
              <div className="card-header">2. Core Concepts</div>
              <div className="card-body">
                <p>Start learning the core concepts of Roxie</p>
                <dl>
                  <dd><Link to="/core-concepts/packages">Roxie Packages</Link></dd>
                  <dd><Link to="/core-concepts/theming">Theming System</Link></dd>
                  <dd><Link to="/core-concepts/classes">The Class System</Link></dd>
                  <dd><Link to="/core-concepts/components">Components</Link></dd>
                  <dd><Link to="/core-concepts/layouts">Layouts and Containers</Link></dd>
                  <dd><Link to="/core-concepts/data">Data Package</Link></dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card mb-3">
              <div className="card-header">3. Components</div>
              <div className="card-body">
                <p>Dig into the most common Roxie components</p>
                <dl>
                  <dd><Link to="/components/dropdown">Dropdown</Link></dd>
                  <dd><Link to="/components/tabpanel">TabPanel</Link></dd>
                  <dd><Link to="/components/grid">Grid</Link></dd>
                  <dd><Link to="/components/chart">Chart</Link></dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card mb-3">
              <div className="card-header">4. Application Architecture</div>
              <div className="card-body">
                <p>Architect-ing your application</p>
                <dl>
                  <dd><Link to="/architecture/application-architecture">Application Architecture</Link></dd>
                  <dd><Link to="/architecture/view-controller">View Controller</Link></dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card mb-3">
              <div className="card-header">5. Examples</div>
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
  </>
}