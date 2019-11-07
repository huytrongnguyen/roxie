import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';

export function AjaxApi() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Ajax</h2>
        <h3>Summary</h3>
        <p>
          Ajax Proxy is one of the most widely-used ways of getting data into your application.
          It uses AJAX requests to load data from the server, usually to be placed into a <code>Store</code>.
          Let's take a look at a typical setup.
          Here we're going to set up a <code>Store</code> that has an Ajax Proxy.
          To prepare, we'll also set up a model:
        </p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
import { DataStore } from '@roxie/core';

type User = {
  id: string,
  name: string,
  email: string,
}

const UserStore = new DataStore<User>({
  proxy: {
    url: '/users',
  },
});

UserStore.load();
          `}</Highlight>
        </div>
        <p>
          Our example is going to load user data into a Store, so we start off by defining a model with the fields that we expect the server to return.
          Next we set up the Store itself, along with a proxy configuration.
        </p>
        <p>
          Now when we call <code>UserStore.load()</code>, the Ajax Proxy springs into action, making a request to the url we configured ('users.json' in this case).
          As we're performing a read, it sends a GET request to that url (by default any kind of read will be sent as a GET request).
        </p>
        <h3>Readers and Writers</h3>
        <p>
          The JSON Reader is used by a Proxy to read a server response that is sent back in JSON format.
          This usually happens as a result of loading a Store - for example we might create something like this:
        </p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
import { DataStore } from '@roxie/core';

type User = {
  id: string,
  name: string,
  email: string,
}

const UserStore = new DataStore<User>({
  proxy: {
    url: '/users.json',
  },
});
          `}</Highlight>
        </div>
        <p>The reader we set up is ready to read data from our server - at the moment it will accept a response like this:</p>
        <div className="card card-footer mb-3">
          <Highlight language="json">{`
[
  {
    "id": 1,
    "name": "Ed Spencer",
    "email": "ed@gmail.com"
  },
  {
    "id": 2,
    "name": "Abe Elias",
    "email": "abe@gmail.com"
  }
]
          `}</Highlight>
        </div>
        <h4>Reading other JSON formats</h4>
        <p>
          If you already have your JSON format defined and it doesn't look quite like what we have above, you can usually pass JSON Reader a couple of configuration options to make it parse your format.
          For example, we can use the <code>rootProperty</code> configuration to parse data that comes back like this:
        </p>
        <div className="card card-footer mb-3">
          <Highlight language="json">{`
{
  "users": [
     {
         "id": 1,
         "name": "Ed Spencer",
         "email": "ed@gmail.com"
     },
     {
         "id": 2,
         "name": "Abe Elias",
         "email": "abe@gmail.com"
     }
  ]
}
          `}</Highlight>
        </div>
        <p>To parse this we just pass in a <code>rootProperty</code> configuration that matches the 'users' above:</p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
const UserStore = new DataStore<User>({
  proxy: {
    url: '/users.json',
    reader: {
      rootProperty: 'users',
    },
  },
});
          `}</Highlight>
        </div>
        <h4>Response MetaData</h4>
        <p>The server can return metadata in its response, in addition to the record data, that describe attributes of the data set itself or are used to reconfigure the Reader.</p>
        <ul>
          <li><code>rootProperty</code>: the property name of the root response node containing the record data</li>
          <li><code>totalProperty</code>: property name for the total number of records in the data</li>
          <li><code>successProperty</code>: property name for the success status of the response</li>
          <li><code>messageProperty</code>: property name for an optional response message</li>
        </ul>
        <p>An initial Reader configuration containing all of these properties might look like this:</p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
reader: {
  rootProperty: 'data',
  totalProperty: 'total',
  successProperty: 'success',
  messageProperty: 'message'
}
          `}</Highlight>
        </div>
        <h3>Url generation</h3>
        <p>
          Ajax Proxy automatically inserts any sorting, filtering, paging and grouping options into the url it generates for each request.
        </p>
        <p>For example, we can customize how this page data is sent to the server:</p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
UserStore.load({ queryParam: { pageNumber: 2 } }); // GET /users?pageNumber=2
          `}</Highlight>
        </div>
        <p>Alternatively, we can configure to send start and limit parameters instead of page:</p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
UserStore.load({ queryParam: { start: 50, limit: 25 } }); // GET /users?start=50&limit=25
          `}</Highlight>
        </div>
      </div>
    </div>
  </Fragment>
}