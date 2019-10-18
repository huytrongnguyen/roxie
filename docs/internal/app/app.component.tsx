import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Link, NavLink as RNavLink, Switch, Route as RRoute } from 'react-router-dom';
import { Roxie } from '@roxie/core';
import { Container } from '@roxie/components';

import pkg from '../../../package.json';

import {
  Home, GettingStarted,
  PackageConcept, LayoutConcept, ComponentConcept, ThemingConcept, DataConcept,
  DialogComponent, DropdownComponent, TabPanelComponent, ListComponent, GridComponent, ChartComponent, ApplicationArchitecture,
} from './guides';
import {
  ComponentExample, ButtonExample, PanelExample, DialogExample, LayoutExample, TabExample,
  FormFieldExample,DatePickerExample, DropdownExample, FormFieldTypeExample,
  GridExample, ListViewExample, GridViewExample,
  TreeExample,
  ChartExample, ColumnChartExample, BarChartExample, LineChartExample, AreaChartExample, PieChartExample,
  KitchenSink,
} from './examples/kitchen-sink';
import { AdminDashboard } from './examples/admin-dashboard';

export function App() {
  return <Router>
    <Container layout="border"
      north={<AppHeader />}
      west={<AppSidebar />}
      center={<main className="auto-scroll-y">
        <Switch>
          <Route exact path="/introduction/getting-started" component={GettingStarted} title="Getting Started" />
          <Route exact path="/core-concepts/packages" component={PackageConcept} title="Roxie Packages" />
          <Route exact path="/core-concepts/components" component={ComponentConcept} title="Components" />
          <Route exact path="/core-concepts/theming" component={ThemingConcept} title="Theming" />
          <Route exact path="/core-concepts/layouts" component={LayoutConcept} title="Layouts and Containers" />
          <Route exact path="/core-concepts/data" component={DataConcept} title="Data Package" />
          <Route exact path="/architecture/application-architecture" component={ApplicationArchitecture} title="Intro to App Architecture" />
          <Route exact path="/components/dialog" component={DialogComponent} title="Dialog" />
          <Route exact path="/components/dropdown" component={DropdownComponent} title="Dropdown" />
          <Route exact path="/components/tabpanel" component={TabPanelComponent} title="Dropdown" />
          <Route exact path="/components/list" component={ListComponent} title="Chart" />
          <Route exact path="/components/grid" component={GridComponent} title="Grid" />
          <Route exact path="/components/chart" component={ChartComponent} title="Chart" />
          <Route exact path="/examples/kitchen-sink" component={KitchenSink} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components" component={ComponentExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/buttons" component={ButtonExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/form-fields" component={FormFieldExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/form-fields/date" component={DatePickerExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/form-fields/dropdown" component={DropdownExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/form-fields/field-types" component={FormFieldTypeExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/layouts" component={LayoutExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/panels" component={PanelExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/tabs" component={TabExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/dialogs" component={DialogExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/grids" component={GridExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/grids/lists" component={ListViewExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/grids/grids" component={GridViewExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/trees" component={TreeExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/charts" component={ChartExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/charts/column" component={ColumnChartExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/charts/bar" component={BarChartExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/charts/line" component={LineChartExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/charts/area" component={AreaChartExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/charts/pie" component={PieChartExample} title="Examples" />
          <Route exact path="/examples/admin-dashboard" component={AdminDashboard} title="Examples" />
          <Route component={Home} title="Docs" />
        </Switch>
      </main>}
    />
  </Router>
}

export function AppHeader() {
  return <header className="navbar navbar-expand-lg">
    <Link to="/" className="navbar-brand">Roxie {pkg.version}</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto"></ul>
      <ThemeSelection />
    </div>
  </header>
}

const ThemeList = [
  { name: 'Light', value: 'roxie-theme-light' },
  { name: 'Dark', value: 'roxie-theme-dark' },
  { name: 'Gray', value: 'roxie-theme-gray' },
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
      <NavLink to="/introduction/getting-started" text="Getting Started" />
      <span className="list-group-item text-uppercase font-weight-bold">Core Concepts</span>
      <NavLink to="/core-concepts/packages" text="Roxie Packages" />
      <NavLink to="/core-concepts/components" text="Components" />
      <NavLink to="/core-concepts/theming" text="Theming" />
      <NavLink to="/core-concepts/layouts" text="Layouts and Containers" />
      <NavLink to="/core-concepts/data" text="Data Package" />
      <span className="list-group-item text-uppercase font-weight-bold">App Architecture</span>
      <NavLink to="/architecture/application-architecture" text="Intro to App Architecture" />
      <span className="list-group-item text-uppercase font-weight-bold">Components</span>
      <NavLink to="/components/dropdown" text="Dropdown" />
      <NavLink to="/components/tabpanel" text="TabPanel" />
      <NavLink to="/components/grid" text="Grid" />
      <NavLink to="/components/chart" text="Chart" />
      <span className="list-group-item text-uppercase font-weight-bold">Examples</span>
      <NavLink to="/examples/kitchen-sink" text="Kitchen Sink" />
    </div>
  </aside>
}

export function NavLink(props: { to: string, text: string }) {
  return <RNavLink to={props.to} className="list-group-item list-group-item-action" activeClassName="active">{props.text}</RNavLink>
}

export function Route({ component: Component, title = '', ...others }) {
  document.title = `${title ? `${title} | ` : ''}Roxie ${pkg.version}`

  return <RRoute {...others} render={props => <Component {...props} />} />
}