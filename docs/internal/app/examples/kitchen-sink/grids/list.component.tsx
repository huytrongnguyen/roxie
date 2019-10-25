import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { DataStore } from '@roxie/core';
import { Container, List, ListItem } from '@roxie/components';

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

export function ListViewExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/grids">Grids</Link></li>
      <li className="breadcrumb-item">Lists</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="card mb-3">
          <div className="card-header">Basic List</div>
          <div className="card-body">
            <List store={UserStore}
                  render={(user: User) => <ListItem>{user.name} &lt;{user.email}&gt;</ListItem>} />
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
  return <List  store={UserStore}
                render={(user: User) => <ListItem>{user.name} &lt;{user.email}&gt;</ListItem>} />
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </Container>
  </Container>
}