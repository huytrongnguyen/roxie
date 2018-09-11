# Roxie

Roxie is a library that build on top of React, helping you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones.

## Quick Start

Use `npm` or `yarn` to install following dependencies:

  * `babel-polyfill`
  * `express`
  * `react`
  * `react-dom`
  * `roxie`

To launch your app, add the following to your `app.js` file

```js
// ./app.js
import React, { PureComponent } from 'react';
import { RoxieApplication } from 'roxie';
import { HashRouter } from 'roxie';

@RoxieApplication
export default class Application extends PureComponent {
  render() {
    return <HashRouter />
  }
}
```

## Core Concepts

### Components

A component in Extension React is the combination of a React Component and a component class that controls a portion of the screen. Here is an example of a component that display a simple string:

```js
import React, { PureComponent } from 'react';
import { Component } from 'roxie';

class DashboardView extends PureComponent {
  render() {
    return <h1>{this.props.$viewModel.title}</h1>;
  }
}

@Component({
  view: DashboardView
})
export default class Dashboard {
  constructor() {
    this.title = 'Dashboard';
  }
}
```

Every component begins with an `@Component` decorator function that takes a *metadata* object. The metadata object describes how the React Component and component class work together. That's mean you can access any property or method of component class via `this.props.$view`.

Actually, with the above example, it can be implemented like this:

```js
import { Component } from 'roxie';

@Component({
  view: ({ $view }) => <h1>{$view.title}</h1>
})
export default class Dashboard {
  constructor() {
    this.title = 'Dashboard';
  }
}
```

### Server Side

To start your server, add the following to your server file

```js
import { RoxieServer } from 'roxie';
import layout from './pages/_layout';
import { Home } from './pages/home';
import { ValuesController } from './controllers/values';

@RoxieServer({
  port: 4000,
  staticFiles: 'dist/server/wwwroot',
  layout,
  pages: [
    Home,
  ],
  controllers: [
    ValuesController,
  ],
})
export default class AppServer {}
```

You also need to setup some scripts in `package.json`

```json
{
  "scripts": {
    "build": "rm -rf dist/* && babel src -D -d dist", /* transpile and copy to dist folder */
    "start": "node dist/server/index.js" /* start server from dist folder */
  }
}
```
