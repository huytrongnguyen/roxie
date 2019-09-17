import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import pkg from '../../../package.json';

import { Home } from './guides/home.component';
import { KitchenSink } from './examples/kitchen-sink.component';

export function App() {
  return <Router>
    <header className="navbar fixed-top">
      <a href="/" className="navbar-brand h1">Roxie {pkg.version}</a>
    </header>
    <main>
      <Switch>
        <Route exact path="/examples/kitchen-sink" component={KitchenSink} />
        <Route component={Home} />
      </Switch>
    </main>
  </Router>
}