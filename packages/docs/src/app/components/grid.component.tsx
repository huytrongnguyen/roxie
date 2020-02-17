import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';
import { DataStore } from '@roxie/core';
import { Grid, Column } from '@roxie/components';

type User = {
  name: string,
  email: string,
  phone: string,
}

const UserStore = new DataStore<User>({
  data: [
    { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
    { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
    { name: 'Homer', email: 'home@simpsons.com', phone: '555-222-1244' },
    { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' },
  ]
});

export function GridComponent() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Grid</h2>
        <p>
          Grids are an excellent way of showing large amounts of tabular data on the client side.
          Grid makes it easy to fetch, sort and filter large amounts of data.
        </p>
        <p>Grids are composed of two main pieces - a <code>DataStore</code> full of data and a set of columns to render.</p>
        <div className="card mb-3">
          <div className="card-body">
            <Grid store={UserStore} fit>
              <Column headerText="Name" dataIndex="name" className="col-4" />
              <Column headerText="Email" dataIndex="email" className="col-4" />
              <Column headerText="Phone" dataIndex="phone" className="col-4" />
            </Grid>
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React, { Fragment } from 'react';
import { DataStore } from '@roxie/core';
import { Grid, Column } from '@roxie/components';

type User = {
  name: string,
  email: string,
  phone: string,
}

const UserStore = new DataStore<User>({
  data: [
    { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
    { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
    { name: 'Homer', email: 'home@simpsons.com', phone: '555-222-1244' },
    { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' },
  ]
});

function Users() {
  return <Grid store={UserStore} fit>
    <Column headerText="Name" dataIndex="name" className="col-4" />
    <Column headerText="Email" dataIndex="email" className="col-4" />
    <Column headerText="Phone" dataIndex="phone" className="col-4" />
  </Grid>
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}