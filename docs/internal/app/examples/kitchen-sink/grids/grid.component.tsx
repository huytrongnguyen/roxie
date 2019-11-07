import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { DataStore } from '@roxie/core';
import { Container, Grid, Column, Paging } from '@roxie/components';

type User = {
  id: number,
  firstName: string,
  lastName: string,
  address: string,
  company: string,
  title: string,
}

const UserStore = new DataStore<User>({
  pageSize: 25,
  proxy: {
    url: 'https://llbzr8dkzl.execute-api.us-east-1.amazonaws.com/production/user',
    reader: {
      rootProperty: 'users',
      totalProperty: 'totalCount',
      keepRawData: true,
    },
  },
});

export function GridViewExample() {
  useEffect(() => { UserStore.load() }, []);

  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/grids">Grids</Link></li>
      <li className="breadcrumb-item">Basic Grid</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="card mb-3">
          <div className="card-header">Basic Grid</div>
          <div className="card-body">
            <div className="card">
              <div className="card-body p-0">
                <Grid store={UserStore} className="border-0">
                  <Column headerText="ID" dataIndex="id" />
                  <Column headerText="First Name" dataIndex="firstName" />
                  <Column headerText="Last Name" dataIndex="lastName" />
                  <Column headerText="Title" dataIndex="title" />
                  <Column headerText="Address" dataIndex="address" />
                  <Column headerText="Company" dataIndex="company" />
                </Grid>
              </div>
              <div className="card-footer">
                <Paging store={UserStore} />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React, { Fragment } from 'react';
import { DataStore } from '@roxie/core';
import { List } from '@roxie/components';

type User = {
  id: number,
  firstName: string,
  lastName: string,
  address: string,
  company: string,
  title: string,
}

const UserStore = new DataStore<User>({
  proxy: {
    url: 'https://llbzr8dkzl.execute-api.us-east-1.amazonaws.com/production/user',
    reader: {
      rootProperty: 'users',
    },
  },
});

function Users() {
  useEffect(() => { UserStore.load() }, []);

  return <Grid store={UserStore}>
    <Column headerText="ID" dataIndex="id" />
    <Column headerText="First Name" dataIndex="firstName" />
    <Column headerText="Last Name" dataIndex="lastName" />
    <Column headerText="Title" dataIndex="title" />
    <Column headerText="Address" dataIndex="address" />
    <Column headerText="Company" dataIndex="company" />
  </Grid>
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </Container>
  </Container>
}