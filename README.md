# Roxie

[![npm version](http://img.shields.io/npm/v/roxie.svg?style=flat-square)](http://npmjs.org/package/roxie)
[![Travis build status](https://travis-ci.org/huytrongnguyen/roxie.svg)](https://travis-ci.org/huytrongnguyen/roxie)
[![npm download](https://img.shields.io/npm/dm/roxie.svg?style=flat-square)](https://npmjs.org/package/roxie)
[![npm license](https://img.shields.io/npm/l/roxie.svg)](https://npmjs.org/package/roxie)

`Roxie` is a library that build on top of React, helping you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones.

## License

`Roxie` is released under the MIT license.

## Quick Start

Use `npm` or `yarn` to install following dependencies:

  * `react`
  * `react-dom`
  * `roxie`

To launch your app, add the following to your `app.js` file

```js
// ./app.js
import React from 'react';
import { application } from 'roxie';
import { HashRouter } from 'roxie';

application({
  mainView: <HashRouter />
});
```

## Core Concepts

### Components

A component in Roxie is the combination of a React Component and a component class that controls a portion of the screen. Here is an example of a component that display a simple string:

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
  view: ({ $viewModel }) => <h1>{$viewModel.title}</h1>
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
// server/index.js

import { server } from 'roxie';
import layout from './pages/_layout';
import { Home } from './pages/home';
import { ValuesController } from './controllers/values';

server({
  port: 4000, // default 3000 if missing
  staticFiles: 'dist/server/wwwroot', // unused static contents if missing
  layout, // default layout if missing
  pages: [ // can be removed or empty
    Home,
  ],
  controllers: [ // can be removed or empty
    ValuesController,
  ],
});
```

```js
// server/pages/_layout.jsx

import React from 'react';
import { renderToString } from 'react-dom/server';

export default (component, model) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Roxie</title>
      </head>
      <body>
        ${renderToString(React.createElement(component, model))}
      </body>
    </html>
  `;
}
```

```js
// server/pages/home.js

import React from 'react';
import { Page, PageModel } from 'roxie';
import { ProductService } from '../services/product.service';

@Page({
  route: '/',
  component: ({ products = [] }) => <h1>Total products: {products.length}</h1>,
})
export class Index extends PageModel {
  static get parameters() {
    return [ProductService];
  }

  constructor(productService) {
    super();
    this.productService = productService;
  }

  async onGet() {
    this.products = await this.productService.findAll();
  }
}
```

```js
// server/controllers/values.js

import { Route, Get, Post, Put, Delete } from 'roxie';

@Route('values')
export class ValuesController {
  @Get()
  getAll() {
    return ['value1', 'value2'];
  }

  @Get(':id')
  get(id) {
    return 'value';
  }

  @Post()
  post(value) {
    return value;
  }

  @Put(':id')
  put(id, value) {
    return { id, value };
  }

  @Delete(':id')
  delete(id) {
    return id;
  }
}
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
