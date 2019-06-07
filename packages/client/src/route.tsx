import * as React from 'react';
import { forEach } from 'lodash';
import { fromEvent } from 'rxjs';

import { classNames } from '@roxie/components';

type Router = {
  path: string[];
  component: React.ComponentType<any>;
}

const ROUTES: { [key:string]:Router } = {},
      getRoute = () => window.location.hash.substring(1) || '/',
      getRoutePath = (route: string) => route.split('/');

function matchPath() {
  const currentRoute = getRoute();

  // basic route (without params)
  if (ROUTES[currentRoute]) {
    return { route: { path: currentRoute }, component: ROUTES[currentRoute].component };
  }

  // advanced route (with params)
  const currentPath = getRoutePath(currentRoute),
        params: any = {};
  for(let route in ROUTES) {
    const mapRoute = ROUTES[route];

    let matched = true;
    forEach(mapRoute.path, (routeName: string, index: number) => {
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
      return { route: { path: currentRoute, params }, component: mapRoute.component };
    }
  }

  // with not found screen
  if (ROUTES['*']) {
    return { route: { path: currentRoute }, component: ROUTES['*'].component };
  }

  // without not found screen
  return { route: { path: currentRoute }, component: null };
};

export class RouterOutlet extends React.PureComponent {
  state = matchPath();
  hashChange$ = fromEvent(window, 'hashchange').subscribe(() => this.setState(matchPath()));

  componentDidMount() {
    (!window.location.hash) && (window.location.hash = '/');
  }

  componentWillUnmount() {
    this.hashChange$.unsubscribe();
  }

  render() {
    const { route, component } = this.state;

    if (!component) {
      console.error('Component not found!');
      return null;
    }

    return React.createElement(component, { route, key: route.path });
  }
}

export const route = (routePath: string = '/') => (component: any) => {
  ROUTES[routePath] = { component, path: getRoutePath(routePath) };
  return component;
}

export type Route = {
  path: string;
  params: { [key:string]:string }
}

export function RouteLink(props: any) {
  const { to = '', className = '', activeClassName = 'active', text = '', children, ...others } = props,
        currentRoute = window.location.hash.substring(1) || '/',
        isActive = to === currentRoute,
        cls = classNames(className, { [activeClassName]: isActive });
  return <a href={to ? `#${to}` : 'javascript:void(0)'} className={cls} {...others}>{text || children}</a>
}