# Roxie

Roxie is a library that build on top of React, helping you build data-intensive, cross-platform web apps for desktops, tablets, and smartphones.

## Quick Start

Use `npm` or `yarn` to install following dependencies:

  * `babel-polyfill`
  * `babel-preset-env`
  * `babel-preset-react`
  * `d3`
  * `react`
  * `react-dom`
  * `rxjs`
  * `ext-react`

To launch your app, add the following to your `app.js` file

```js
// ./app.js
import 'babel-polyfill';
import React, { PureComponent } from 'react';
import { Application } from 'ext-react';
import Viewport from './components/viewport/viewport';

@Application()
export default class App extends PureComponent {
  render() {
    return <Viewport />
  }
}
```

## Core Concepts

### Components

A component in Extension React is the combination of a React Component and a component class that controls a portion of the screen. Here is an example of a component that display a simple string:

```js
import React, { PureComponent } from 'react';
import { Component } from 'ext-react';

class DashboardView extends PureComponent {
  render() {
    return <h1>{this.props.$view.title}</h1>;
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
import { Component } from 'ext-react';

@Component({
  view: ({ $view }) => <h1>{$view.title}</h1>
})
export default class Dashboard {
  constructor() {
    this.title = 'Dashboard';
  }
}
```

### Data Package

Stores load data via a `Proxy`. Creating a `Store` is easy - we just tell it the `Proxy` to use for loading and saving its data:

```js
import { Store } from 'ext-react';

export default Store({
  storeId: 'UserStore',
  proxy: {
    url: '/api/user/search'
  }
});
```

In the example above we configured an AJAX proxy to load data from the url `/api/user/search`.

Now, just bind a store to the `Component`:

```js
import React, { PureComponent } from 'react';
import CardStore from '~/stores/card';

export default class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.reload = () => this.forceUpdate();
  }

  componentDidMount() {
    CardStore.clearData();
    CardStore.load();
    CardStore.subscribe(this.reload);
  }

  render() {
    const records = CardStore.getData();
    return <section>
      <section className="rx-grid-header">
        <div className="d-flex flex-row rx-grid-header-container">
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>ID</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Name</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Type</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Armor</div>
          <div className="rx-grid-column-header text-sm-center" style={{width:'20%'}}>Weapon</div>
        </div>
      </section>
      <section className="rx-grid-body" style={{overflow:'visible'}}>
        <section className="rx-grid-view">
          {records.map(record => <article className="d-flex flex-row rx-grid-row">
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('Id')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('Name')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('Type')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('ArmorUsable')}</div>
            <div className="rx-grid-cell" style={{width:'20%'}}>{record.get('WeaponUsable')}</div>
          </article>)}
        </section>
      </section>
    </section>;
  }
}
```

In this above example, we use `subscribe` to update the component whenever data's changed. Because Store convert data to Model then you need to use `get` to access data.

### Screen Navigation

`Route` decorator is most basic responsibility is to render UI when a location matches the route’s path.

`Link` provides declarative, accessible navigation around your application.

`HashRouter` uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

```js
// ./app.js
import 'babel-polyfill';
import React, { PureComponent } from 'react';
import { Application } from 'ext-react';
import Viewport from './components/viewport/viewport';

@Application({
  views: [
    require('./components/search'),
    require('./components/details'),
    require('./components/notfound'),
  ],
})
export default class App extends PureComponent {
  render() {
    return <Viewport />
  }
}

// ./components/viewport/viewport.js
import React, { Component } from 'react';
import { Link, HashRouter } from 'ext-react';

export default class Viewport extends Component {
  render() {
    return <section>
      <Link to="/">Dashboard</Link>
      <Link to="/search">Search</Link>
      <Link to="/details/huynguyen">Details</Link>
      <HashRouter />
    </section>;
  }
}

// ./components/search/search.js
import React from 'react';
import { Route, Component } from 'ext-react';

@Route('/search')
@Component({
  view: () => <section />
})
export default class Search { }

// /components/search/detail.js
import React from 'react';
import { Route, Component } from 'ext-react';

@Route('/details/:name')
@Component({
  view: ({ params }) => <h1>{params.name}</h1>
})
export default class Details { }

// ./components/notfound/notfound.js
import React, { PureComponent } from 'react';
import { Route } from 'ext-react';

@Route('*')
export default class NotFound extends PureComponent {
  render() {
    return <h1>'{this.props.params.route}' doesn't exist</h1>
  }
}
```

## Built-in Components

Extension React has several build-in components to support for building responsive web. For example:

  * `Grid` are an excellent way of showing large amounts of tabular data on the client side. Essentially a supercharged <table>, `Grid` iss an incredibly versatile component that provides an easy way to display and edit data.

```js
// ./app.js
import 'babel-polyfill';
import React, { PureComponent } from 'react';
import { Application } from 'ext-react';

@Application({
  stores: [
    require('./stores/cards'),
  ],
  views: [
    require('./components/viewport/viewport'),
    require('./components/cards'),
  ],
})
export default class App extends PureComponent {
  render() {
    return <Viewport />
  }
}

// ./stores/card
import { Store } from 'ext-react';

export default Store({
  storeId: 'CardStore',
  fields: [ 'Name' ],
  proxy: {
    url: '/data/card.json'
  }
})

// ./components/cards.js
import { Route, Component } from 'ext-react';

@Route('/example/cards')
@Component({
  stores: [ 'CardStore' ],
  view: CardView
})
export default class Card {
  @bind
  saveChanges() {
    this.stores.CardStore.sync({
      fail: err => console.log(err)
    });
  }

  @bind
  rejectChanges() {
    this.stores.CardStore.rejectChanges();
  }
}

// ./components/cards.view.jsx
import React, { PureComponent } from 'react';
import { Grid } from 'ext-react';

export default class CardView extends PureComponent {
  componentDidMount() {
    this.props.stores.CardStore.load();
  }
  render() {
    const {CardStore } = this.props.stores;
    return <Grid store={CardStore}>
      <div header="Id" dataIndex="Id" />
      <div header="Name" dataIndex="Name" editable />
      <div header="Type" dataIndex="Type" />
    </Grid>
  }
}
```
