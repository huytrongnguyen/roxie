import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Roxie } from '@roxie/core';

import pkg from '../../../package.json';

import { Home } from './guides';
import {
  ComponentExample, ButtonExample, PanelExample, WindowExample, LayoutExample,
  FormFieldExample, FormFieldTypeExample,
  KitchenSink,

} from './examples/kitchen-sink';

export function App() {
  return <Router>
    <header className="navbar navbar-expand-lg fixed-top">
      <a href="/roxie" className="navbar-brand font-weight-bold">Roxie {pkg.version}</a>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
        <ThemeSelection />
      </div>
    </header>
    <main>
      <Switch>
        <Route exact path="/examples/kitchen-sink" component={KitchenSink} />
        <Route exact path="/examples/kitchen-sink/components" component={ComponentExample} />
        <Route exact path="/examples/kitchen-sink/components/buttons" component={ButtonExample} />
        <Route exact path="/examples/kitchen-sink/components/form-fields" component={FormFieldExample} />
        <Route exact path="/examples/kitchen-sink/components/form-fields/field-types" component={FormFieldTypeExample} />
        <Route exact path="/examples/kitchen-sink/components/layouts" component={LayoutExample} />
        <Route exact path="/examples/kitchen-sink/components/panels" component={PanelExample} />
        <Route exact path="/examples/kitchen-sink/components/windows" component={WindowExample} />
        <Route component={Home} />
      </Switch>
    </main>
  </Router>
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