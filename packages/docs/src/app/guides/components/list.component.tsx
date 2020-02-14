import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';
import { DataStore } from '@roxie/core';
import { List, ListItem } from '@roxie/components';

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

export function ListComponent() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>List</h2>
        <p>List is a custom styled DataView.</p>
        <div className="card mb-3">
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
    </div>
  </Fragment>
}