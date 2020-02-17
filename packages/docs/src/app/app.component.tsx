import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Link, Switch, Route as RouteDom, NavLink as NavLinkDom } from 'react-router-dom';
import { Roxie } from '@roxie/core';
import { Container } from '@roxie/components';

import pkg from '../../../../package.json';

import { Home, GettingStarted } from './home';
import { PackageConcept, ClassConcept, LayoutConcept, ComponentConcept, ThemingConcept, DataConcept } from './core-concepts';
import { ApplicationArchitecture, ViewController } from './architecture';
import { NumberApi, StringApi, DateApi, AjaxApi, ModelApi, StoreApi } from './api';
import { DialogComponent, DropdownComponent, TabPanelComponent, ListComponent, GridComponent, ChartComponent } from './components';
import { KitchenSink } from './examples/kitchen-sink';
import {
  ComponentExample,
  ButtonExample,
  FormFieldExample, DatePickerExample, DropdownExample, FileUploadExample, FormFieldTypeExample,
  FormExample,
  LayoutExample,
  PanelExample,
  TabExample,
  DialogExample,
  TooltipExample,
  ToolbarExample,
} from './examples/kitchen-sink/components';
import { GridExample, GridViewExample, ListViewExample } from './examples/kitchen-sink/grids';
import { ChartExample, ColumnChartExample, BarChartExample, LineChartExample, AreaChartExample, PieChartExample } from './examples/kitchen-sink/charts';
import { AdminDashboard } from './examples/admin-dashboard';

export function App() {
  return <Router>
    <Container layout="border" north={<AppHeader />} west={<AppSidebar />}>
      <main className="auto-scroll-y">
        <Switch>
          <Route exact path="/introduction/getting-started" component={GettingStarted} title="Getting Started" />
          <Route exact path="/core-concepts/packages" component={PackageConcept} title="Roxie Packages" />
          <Route exact path="/core-concepts/classes" component={ClassConcept} title="The Class System" />
          <Route exact path="/core-concepts/components" component={ComponentConcept} title="Components" />
          <Route exact path="/core-concepts/theming" component={ThemingConcept} title="Theming System" />
          <Route exact path="/core-concepts/layouts" component={LayoutConcept} title="Layouts and Containers" />
          <Route exact path="/core-concepts/data" component={DataConcept} title="Data Package" />
          <Route exact path="/architecture/application-architecture" component={ApplicationArchitecture} title="Intro to App Architecture" />
          <Route exact path="/architecture/view-controller" component={ViewController} title="ViewController" />
          <Route exact path="/components/dialog" component={DialogComponent} title="Dialog" />
          <Route exact path="/components/dropdown" component={DropdownComponent} title="Dropdown" />
          <Route exact path="/components/tabpanel" component={TabPanelComponent} title="Dropdown" />
          <Route exact path="/components/list" component={ListComponent} title="Chart" />
          <Route exact path="/components/grid" component={GridComponent} title="Grid" />
          <Route exact path="/components/chart" component={ChartComponent} title="Chart" />
          <Route exact path="/number" component={NumberApi} title="Number" />
          <Route exact path="/string" component={StringApi} title="String" />
          <Route exact path="/date" component={DateApi} title="Date" />
          <Route exact path="/ajax" component={AjaxApi} title="Ajax" />
          <Route exact path="/model" component={ModelApi} title="Model" />
          <Route exact path="/store" component={StoreApi} title="Store" />
          <Route exact path="/examples/kitchen-sink" component={KitchenSink} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components" component={ComponentExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/buttons" component={ButtonExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/form-fields" component={FormFieldExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/form-fields/date" component={DatePickerExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/form-fields/dropdown" component={DropdownExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/form-fields/file-uploads" component={FileUploadExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/form-fields/field-types" component={FormFieldTypeExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/forms" component={FormExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/layouts" component={LayoutExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/panels" component={PanelExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/tabs" component={TabExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/dialogs" component={DialogExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/tooltips" component={TooltipExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/components/toolbars" component={ToolbarExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/grids" component={GridExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/grids/lists" component={ListViewExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/grids/grids" component={GridViewExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/charts" component={ChartExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/charts/column" component={ColumnChartExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/charts/bar" component={BarChartExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/charts/line" component={LineChartExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/charts/area" component={AreaChartExample} title="Examples" />
          <Route exact path="/examples/kitchen-sink/charts/pie" component={PieChartExample} title="Examples" />
          <Route exact path="/examples/admin-dashboard" component={AdminDashboard} title="Examples" />
          <Route component={Home} title="Docs" />
        </Switch>
      </main>
    </Container>
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
  { name: 'Bootstrap', value: 'roxie-theme-bootstrap' },
  { name: 'Light', value: 'roxie-theme-light' },
  { name: 'Dark', value: 'roxie-theme-dark' },
  { name: 'Gray', value: 'roxie-theme-gray' },
  { name: 'Triton', value: 'roxie-theme-triton' },
]

export function ThemeSelection() {
  const [currentTheme, setCurrentTheme] = useState(ThemeList[0]);

  useEffect(() => {
    const themeCode = Roxie.Cache.get('roxie-theme') || ThemeList[0].value,
          theme = ThemeList.filter(theme => theme.value === themeCode)[0];
    updateTheme(theme || ThemeList[0]);
  }, [])

  function updateTheme(nextTheme: { name: string, value: string }) {
    const prevTheme = currentTheme.value;
    setCurrentTheme(nextTheme);
    Roxie.Cache.set('roxie-theme', nextTheme.value);
    // Roxie.query('html').removeClass(prevTheme).addClass(nextTheme.value);
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
  return <aside className="border-right auto-scroll-y" style={{width:300}}>
    <div className="sidebar-nav nav">
      <li className="nav-item"><NavLink to="/introduction/getting-started" text="Getting Started" /></li>
      <li className="nav-title">Core Concepts</li>
      <li className="nav-item"><NavLink to="/core-concepts/packages" text="Roxie Packages" /></li>
      <li className="nav-item"><NavLink to="/core-concepts/theming" text="Theming System" /></li>
      <li className="nav-item"><NavLink to="/core-concepts/classes" text="The Class System" /></li>
      <li className="nav-item"><NavLink to="/core-concepts/components" text="Components" /></li>
      <li className="nav-item"><NavLink to="/core-concepts/layouts" text="Layouts and Containers" /></li>
      <li className="nav-item"><NavLink to="/core-concepts/data" text="Data Package" /></li>
      <li className="nav-title">App Architecture</li>
      <li className="nav-item"><NavLink to="/architecture/application-architecture" text="Intro to App Architecture" /></li>
      <li className="nav-item"><NavLink to="/architecture/view-controller" text="ViewController" /></li>
      <li className="nav-title">Components</li>
      <li className="nav-item"><NavLink to="/components/dropdown" text="Dropdown" /></li>
      <li className="nav-item"><NavLink to="/components/tabpanel" text="TabPanel" /></li>
      <li className="nav-item"><NavLink to="/components/grid" text="Grid" /></li>
      <li className="nav-item"><NavLink to="/components/chart" text="Chart" /></li>
      <li className="nav-title">API</li>
      <li className="nav-item"><NavLink to="/number" text="Number" /></li>
      <li className="nav-item"><NavLink to="/string" text="String" /></li>
      <li className="nav-item"><NavLink to="/date" text="Date" /></li>
      <li className="nav-item"><NavLink to="/ajax" text="Ajax" /></li>
      <li className="nav-item"><NavLink to="/model" text="Model" /></li>
      <li className="nav-item"><NavLink to="/store" text="Store" /></li>
      <li className="nav-title">Examples</li>
      <li className="nav-item"><NavLink to="/examples/kitchen-sink" text="Kitchen Sink" /></li>
    </div>
  </aside>
}

export function NavLink(props: { to: string, text: string }) {
  return <NavLinkDom to={props.to} className="nav-link" activeClassName="active">{props.text}</NavLinkDom>
}

export function Route({ component: Component, title = '', ...others }) {
  document.title = `${title ? `${title} | ` : ''}Roxie ${pkg.version}`

  return <RouteDom {...others} render={props => <Component {...props} />} />
}