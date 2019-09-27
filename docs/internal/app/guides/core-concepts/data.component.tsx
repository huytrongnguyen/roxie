import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';

export function DataConcept() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="card card-body mb-3">
          <h2>Data Packages</h2>
          <p>
            Many of the components in Roxie that handle large volumes of data such as grids and charts.
            This guide explains the basics of using the Roxie data package.
          </p>
          <h3><code>DataStore</code></h3>
          <p>
            The <code>DataStore</code> class is used to load data into grids, trees, lists, charts, D3 visualizations and more.
            This example shows the typical usage of <code>DataStore</code>:
          </p>
          <Highlight language="js">{`
import React, { Fragment, useState, useEffect } from 'react';
import { DataStore } from '@roxie/core';

type User = {
  name: string;
  email: string;
}

const UserStore = new DataStore<User[]>();

function Users() {
  useEffect(() => {
    UserStore.next([
      { name: 'Tim Smith', email: 'tim101@gmail.com' },
      { name: 'Jill Lindsey', email: 'jlindsey890@gmail.com' }
    ])
  }, [])

  return <UserTable />
}

function UserTable() {
  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    UserStore.subscribe(setUsers);
  }, [])

  return <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>)}
    </tbody>
  </table>
}
          `}</Highlight>
        </div>
      </div>
    </div>
  </Fragment>
}

