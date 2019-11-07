import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';

export function StoreApi() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Store</h2>
        <h3>Summary</h3>
        <p>
          The Store class encapsulates a client side cache of model objects.
          Stores load data via a proxy, and also provide functions for sorting, filtering and querying the model instances contained within it.
        </p>
        <p>Creating a Store is easy - we just tell it the Model and the Proxy to use for loading and saving its data:</p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
import { DataModel } from '@roxie/core';

// Set up a model to use in our Store
type User = {
  firstName: string,
  lastName: string,
  age: number,
  eyeColor: string,
}

const UserStore = new DataStore<User>({
  proxy: {
    url: '/users',
    reader: {
      rootProperty: 'users',
    },
  },
});
          `}</Highlight>
        </div>
        <p>
          In the example above we configured an AJAX proxy to load data from the url '/users.json'.
          We told our Proxy to use a JSON Reader to parse the response from the server into model object.
        </p>
        <h3>Inline data</h3>
        <p>
          Stores can also load data inline.
          Internally, Store converts each of the objects we pass in as <code>data</code> into Model instances:
        </p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
const UserStore = new DataStore<User>({
  data: [
    {firstName: 'Peter',   lastName: 'Venkman'},
    {firstName: 'Egon',    lastName: 'Spengler'},
    {firstName: 'Ray',     lastName: 'Stantz'},
    {firstName: 'Winston', lastName: 'Zeddemore'},
  ]
});
          `}</Highlight>
        </div>
        <p>Loading inline data using the method above is great if the data is in the correct format already (e.g. it doesn't need to be processed by a JSON Reader).</p>
      </div>
    </div>
  </Fragment>
}