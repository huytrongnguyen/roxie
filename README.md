# Roxie

Roxie is a library that build on top of React, helping you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones.

## Quick Start

Use `npm` or `yarn` to install following dependencies:

  * `babel-polyfill`
  * `express`
  * `react`
  * `react-dom`
  * `rxjs`
  * `roxie`

To launch your app, add the following to your `app.js` file

```js
// ./app.js
import 'babel-polyfill';
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

To start your server, add the following to your `server.js` file

```js
import 'babel-polyfill';
import { RoxieServer } from 'roxie';

@RoxieServer
export default class Application {
  configureServices(services) {
    services.useStaticFiles('./dist');
  }
}
```

You also need to setup a script in `package.json`

```json
{
  "scripts": {
    "start": "babel-node server.js --presets env --plugins transform-decorators-legacy"
  }
}
```
