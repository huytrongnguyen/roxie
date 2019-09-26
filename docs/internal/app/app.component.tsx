import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Link, NavLink, Switch, Route } from 'react-router-dom';
import { Roxie } from '@roxie/core';
import { Container } from '@roxie/components';

import pkg from '../../../package.json';

import {
  Home, GettingStarted,
  LayoutConcept,
} from './guides';
import {
  ComponentExample, ButtonExample, PanelExample, WindowExample, LayoutExample,
  FormFieldExample, FormFieldTypeExample,
  TreeExample,
  KitchenSink,
} from './examples/kitchen-sink';
import { AdminDashboard } from './examples/admin-dashboard';

export function App() {
  return <Router>
    <Container layout="border" className="fullscreen"
      north={<AppHeader />}
      west={<AppSidebar />}
      center={<main className="auto-scroll-y">
        <Switch>
          <Route exact path="/introduction/getting-started" component={GettingStarted} />
          <Route exact path="/core-concepts/layouts" component={LayoutConcept} />
          <Route exact path="/examples/kitchen-sink" component={KitchenSink} />
          <Route exact path="/examples/kitchen-sink/components" component={ComponentExample} />
          <Route exact path="/examples/kitchen-sink/components/buttons" component={ButtonExample} />
          <Route exact path="/examples/kitchen-sink/components/form-fields" component={FormFieldExample} />
          <Route exact path="/examples/kitchen-sink/components/form-fields/field-types" component={FormFieldTypeExample} />
          <Route exact path="/examples/kitchen-sink/components/layouts" component={LayoutExample} />
          <Route exact path="/examples/kitchen-sink/components/panels" component={PanelExample} />
          <Route exact path="/examples/kitchen-sink/components/windows" component={WindowExample} />
          <Route exact path="/examples/kitchen-sink/trees" component={TreeExample} />
          <Route exact path="/examples/admin-dashboard" component={AdminDashboard} />
          <Route component={Home} />
        </Switch>
      </main>}
    />
  </Router>
}

export function AppHeader() {
  return <header className="navbar navbar-expand-lg">
    <Link to="/roxie" className="navbar-brand font-weight-bold">Roxie {pkg.version}</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto"></ul>
      <ThemeSelection />
    </div>
  </header>
}

const ThemeList = [
  { name: 'Light', value: 'roxie-theme-light' },
  { name: 'Dark', value: 'roxie-theme-dark' },
]

export function ThemeSelection() {
  const [currentTheme, setCurrentTheme] = useState(ThemeList[0]);

  useEffect(() => {
    const themeCode = Roxie.Cache.get('roxie-theme') || ThemeList[0].value,
          theme = ThemeList.filter(theme => theme.value === themeCode)[0];
    updateTheme(theme);
  }, [])

  function updateTheme(nextTheme: { name: string, value: string }) {
    const prevTheme = currentTheme.value;
    setCurrentTheme(nextTheme);
    Roxie.Cache.set('roxie-theme', nextTheme.value);
    Roxie.query('html').removeClass(prevTheme).addClass(nextTheme.value);
  }

  return <ul className="navbar-nav">
    <li className="nav-item dropdown">
      <span className="nav-link dropdown-toggle" data-toggle="dropdown">{currentTheme.name}</span>
      <div className="dropdown-menu dropdown-menu-right">
        {ThemeList.map(theme => {
          return <span  key={theme.value}
                        className={Roxie.classNames('dropdown-item', { active: theme.value === currentTheme.value })}
                        onClick={() => updateTheme(theme)}>
            {theme.name}
          </span>
        })}
      </div>
    </li>
  </ul>
}

export function AppSidebar() {
  return <aside style={{width:300}} className="border-right auto-scroll-y">
    <div className="list-group list-group-flush">
      <NavLink to="/introduction/getting-started" className="list-group-item list-group-item-action" activeClassName="active">Getting Started</NavLink>
      <span className="list-group-item text-uppercase font-weight-bold">Core Concepts</span>
      <span className="list-group-item list-group-item-action text-muted">The Class System</span>
      <span className="list-group-item list-group-item-action text-muted">Components</span>
      <NavLink to="/core-concepts/layouts" className="list-group-item list-group-item-action" activeClassName="active">Layouts and Containers</NavLink>
      <span className="list-group-item list-group-item-action text-muted">Data Packages</span>
      <span className="list-group-item list-group-item-action text-muted">Events</span>
    </div>
  </aside>
}