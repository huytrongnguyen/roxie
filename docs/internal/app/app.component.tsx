import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import pkg from '../../../package.json';

import { Home } from './guides';
import {  ComponentExample, ButtonExample,
          KitchenSink,  } from './examples/kitchen-sink';

export function App() {
  return <Router>
    <header className="navbar fixed-top">
      <a href="/" className="navbar-brand h1">Roxie {pkg.version}</a>
    </header>
    <main>
      <Switch>
        <Route exact path="/examples/kitchen-sink" component={KitchenSink} />
        <Route exact path="/examples/kitchen-sink/components" component={ComponentExample} />
        <Route exact path="/examples/kitchen-sink/components/buttons" component={ButtonExample} />
        <Route component={Home} />
      </Switch>
    </main>
  </Router>
}