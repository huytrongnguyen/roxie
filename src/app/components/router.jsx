import React, { PureComponent } from 'react';
import { fromEvent } from 'rxjs';
import Ext from '~/roxie/core/ext';

const ROUTES = {},
      getRoute = () => window.location.hash.substring(1) || '/',
      getRoutePath = route => route.split('/');

export const HashRoute = (route = '/') => {
  return comp => {
    ROUTES[route] = {
      route,
      comp,
      path: getRoutePath(route)
    }
  }
}

export const HashLink = ({ to, className = '', activeClassName = 'active', text, children, ...others }) => {
  return <a href={`#${to}`} className={Ext.className('nav-link', className, { [activeClassName]: to === getRoute() })} {...others}>
    {text || children}
  </a>
}

export class HashRouter extends PureComponent {
  constructor(props) {
    super(props);
    Ext.initialState(this, matchPath());
  }

  componentDidMount() {
    (!window.location.hash) && (window.location.hash = '/');
    fromEvent(window, 'hashchange').subscribe(() => this.setState(matchPath()));
  }

  render() {
    const { route, comp, params } = this.state;

    if (!comp) {
      console.error('Component not found!');
      return null;
    }

    return React.createElement(comp, { route, params });
  }
}

function matchPath() {
  const currentRoute = getRoute(),
        params = { route: currentRoute };

  // basic route (without params)
  if (ROUTES[currentRoute]) {
    return { route: currentRoute, comp: ROUTES[currentRoute].comp, params };
  }

  // advanced route (with params)
  const currentPath = getRoutePath(currentRoute);
  for(let route in ROUTES) {
    const mapRoute = ROUTES[route];

    let matched = true;
    Ext.List(mapRoute.path).each((routeName, index) => {
      if (routeName !== currentPath[index]) {
        if (routeName.startsWith(':')) { // detect param value
          params[routeName.substring(1)] = currentPath[index];
        } else {
          matched = false;
          return;
        }
      }
    });

    if (matched) {
      return { route: currentRoute, comp: mapRoute.comp, params };
    }
  }

  // with not found screen
  if (ROUTES['*']) {
    return { route: currentRoute, comp: ROUTES['*'].comp, params };
  }

  // without not found screen
  return { route: currentRoute, comp: null, params };
}