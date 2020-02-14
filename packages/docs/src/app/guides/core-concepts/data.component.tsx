import React, { Fragment, useState, useEffect } from 'react';
import Highlight from 'react-highlight.js';
import { DataStore } from '@roxie/core';

type User = {
  name: string,
  email: string,
}

const UserStore = new DataStore<User>({
  data: [
    { name: 'Tim Smith', email: 'tim101@gmail.com' },
    { name: 'Jill Lindsey', email: 'jlindsey890@gmail.com' }
  ]
});

export function DataConcept() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Data Packages</h2>
        <p>
          Many of the components in Roxie that handle large volumes of data such as grids and charts.
          This guide explains the basics of using the Roxie data package.
        </p>
        <h3>Proxy</h3>
        <p>Proxies are used by Models and Stores to handle the loading and saving of data.</p>
        <h3>DataModel</h3>
        <p>
          The centerpiece of the data package is <code>DataModel</code>.
          A Model represents an entity in an application.
          For example, an e-commerce app might have models for Users, Products and Orders.
          At the simplest level, a Model defines a set of fields and related business logic.
        </p>
        <div className="card card-footer mb-3">
          <Highlight language="tsx">{`
import { DataModel } from '@roxie/core';

type User = {
  name: string,
  email: string,
}

const UserModel = new DataModel<User>({
  proxy: {
    url: '/user.json',
  },
});
          `}</Highlight>
        </div>
        <h3>DataStore</h3>
        <p>
          The <code>DataStore</code> class is used to load data into grids, trees, lists, charts, D3 visualizations and more.
          This example shows the typical usage of <code>DataStore</code>:
        </p>
        <div className="card mb-3">
          <div className="card-body">
            <Users />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React, { Fragment, useState, useEffect } from 'react';
import { DataStore } from '@roxie/core';

type User = {
  name: string,
  email: string,
}

const UserStore = new DataStore<User>({
  data: [
    { name: 'Tim Smith', email: 'tim101@gmail.com' },
    { name: 'Jill Lindsey', email: 'jlindsey890@gmail.com' },
  ]
});

function Users() {
  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    UserStore.subscribe(setUsers);
  }, [])

  return <table className="table table-bordered table-striped table-hover">
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
        <p>
          The example above uses inline data via the <code>data</code> config.
          In most real-world applications, you'll configure your store with a <code>proxy</code> to fetch data from the server.
          We can modify the store in the previous example to fetch data from <code>users.json</code> using <code>Ajax</code>:
        </p>
        <div className="card card-footer mb-3">
          <Highlight language="tsx">{`
import React, { Fragment, useState, useEffect } from 'react';
import { DataStore } from '@roxie/core';

type User = {
  name: string,
  email: string,
}

const UserStore = new DataStore<User>({
  proxy: {
    url: 'users.json'
  }
});

function Users() {
  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    UserStore.subscribe(setUsers);
    UserStore.load();
  }, [])

  return <table className="table table-striped table-bordered">
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
        <h3>Sorting</h3>
        <p>TBD</p>
        <h3>Filtering</h3>
        <p>TBD</p>
      </div>
    </div>
  </Fragment>
}

function Users() {
  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    UserStore.subscribe(setUsers);
  }, [])

  return <table className="table table-bordered table-striped table-hover mb-0">
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

