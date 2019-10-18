import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
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

export function GridViewExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/grids">Grids</Link></li>
      <li className="breadcrumb-item">Lists</li>
    </ol>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="card mb-3">
          <div className="card-header">Basic List</div>
          <div className="card-body">
            <Grid store={UserStore}>
              <Column headerText="Name" dataIndex="name" />
              <Column headerText="Email" dataIndex="email" />
              <Column headerText="Phone" dataIndex="phone" />
            </Grid>
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React, { Fragment } from 'react';
import { DataStore } from '@roxie/core';
import { List } from '@roxie/components';

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
  return <Grid store={UserStore}>
    <Column headerText="Name" dataIndex="name" />
    <Column headerText="Email" dataIndex="email" />
    <Column headerText="Phone" dataIndex="phone" />
  </Grid>
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}