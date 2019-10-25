import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { Container } from '@roxie/components';

export function PanelExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item">Panels</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="card mb-3">
          <div className="card-header">Basic Panels</div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <div className="card card-body mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="card mb-1">
                  <div className="card-header">Title</div>
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
                <div className="card mb-1">
                  <div className="card-header">
                    <button type="button" className="btn btn-block text-left collapsed p-0" data-toggle="collapse" data-target="#collapse1">
                      Collapsible
                    </button>
                  </div>
                  <div id="collapse1" className="collapse show">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card bg-primary mb-1">
                  <div className="card-header">Primary</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-secondary mb-1">
                  <div className="card-header">Secondary</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-success mb-1">
                  <div className="card-header">Success</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-danger mb-1">
                  <div className="card-header">Danger</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-warning mb-1">
                  <div className="card-header">Warning</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-info mb-1">
                  <div className="card-header">Info</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-light mb-1">
                  <div className="card-header">Light</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-dark mb-1">
                  <div className="card-header">Dark</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
              </div>
              <div className="col-4">
                <div className="card bg-outline-primary mb-1">
                  <div className="card-header">Outline Primary</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-outline-secondary mb-1">
                  <div className="card-header">Outline Secondary</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-outline-success mb-1">
                  <div className="card-header">Outline Success</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-outline-danger mb-1">
                  <div className="card-header">Outline Danger</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-outline-warning mb-1">
                  <div className="card-header">Outline Warning</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-outline-info mb-1">
                  <div className="card-header">Outline Info</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-outline-light mb-1">
                  <div className="card-header">Outline Light</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
                <div className="card bg-outline-dark mb-1">
                  <div className="card-header">Outline Dark</div>
                  <div className="card-body">the quick brown fox jumps over the lazy dog</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<div class="card card-body">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>
<div class="card">
  <div class="card-header">Title</div>
  <div class="card-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
</div>
<div class="card">
  <div class="card-header">
    <button type="button" class="btn btn-block text-left collapsed" data-toggle="collapse" data-target="#collapse1">
      Collapsible
    </button>
  </div>
  <div id="collapse1" class="collapse show">
    <div class="card-body">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>
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
<div class="card bg-outline-primary">
  <div class="card-header">Primary</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-outline-secondary">
  <div class="card-header">Secondary</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-outline-success">
  <div class="card-header">Success</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-outline-danger">
  <div class="card-header">Danger</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-outline-warning">
  <div class="card-header">Warning</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-outline-info">
  <div class="card-header">Info</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-outline-light">
  <div class="card-header">Light</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
<div class="card bg-outline-dark">
  <div class="card-header">Dark</div>
  <div class="card-body">the quick brown fox jumps over the lazy dog</div>
</div>
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
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
    </Container>
  </Container>
}