import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';

export function ModelApi() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Model</h2>
        <h3>Summary</h3>
        <p>
          A Model or Entity represents some object that your application manages.
          For example, one might define a Model for Users, Products, Cars, or other real-world object that we want to model in the system.
        </p>
        <h3>The "id" Field and <code>idProperty</code></h3>
        <p>
          A Model definition always has an identifying field which should yield a unique key for each instance.
          By default, a field named "id" will be created with a mapping of "id".
          This happens because of the default <code>idProperty</code> provided in Model definitions.
        </p>
        <h3>Using a Proxy</h3>
        <p>
          Models are great for representing types of data and relationships, but sooner or later we're going to want to load or save that data somewhere.
          All loading and saving of data is handled via a <code>proxy</code>>, which can be set directly on the Model:
        </p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
import { DataModel } from '@roxie/core';

type User = {
  id: number,
  name: string,
  email: string,
}

const UserModel = new DataModel<User>({
  proxy: {
    url: '/users/:userId',
  },
});
          `}</Highlight>
        </div>
        <p>
          Here we've set up a Rest Proxy, which knows how to load and save data to and from a RESTful backend.
          Let's see how this works:
        </p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
UserModel.create({ name: 'Ed Spencer', email: 'ed@gmail.com' } as User);

UserStore.save({ url: '/users', method: 'post' }); // POST /users
          `}</Highlight>
        </div>
        <p>Calling save on the new Model instance tells the configured Rest Proxy that we wish to persist this Model's data onto our server.</p>
        <p>Loading data via the Proxy is accomplished with the <code>load</code> method:</p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
// Uses the configured Rest Proxy to make a GET request to /users/123
UserStore.load({ pathParams: { userId: 123 } });
          `}</Highlight>
        </div>
        <p>Models can also be updated and destroyed easily:</p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
// the user Model we loaded in the last snippet:
UserModel.set({ name: 'Khan Noonien Singh' });

// tells the Proxy to save the Model. In this case it will perform a PUT request
// to /users/123 as this Model already has an id
UserStore.save({ url: '/users/123', method: 'put' });

// tells the Proxy to destroy the Model. Performs a DELETE request to /users/123
UserStore.save({ url: '/users/123', method: 'delete' });
          `}</Highlight>
        </div>
      </div>
    </div>
  </Fragment>
}