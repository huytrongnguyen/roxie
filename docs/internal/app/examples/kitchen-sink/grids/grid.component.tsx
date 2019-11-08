import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { DataStore } from '@roxie/core';
import { Container, Grid, Column, Paging } from '@roxie/components';

export function GridViewExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/grids">Grids</Link></li>
      <li className="breadcrumb-item">Basic Grid</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <BasicGrid />
        <GridWithPaging />
      </div>
    </Container>
  </Container>
}

type Employee = {
  firstname: string,
  lastname: string,
  seniority: number,
  dep: string,
  hired: string,
}

const EmployeeStore = new DataStore<Employee>({
  data: [
    {firstname:'Michael', lastname:'Scott', seniority:7, dep:'Management', hired:'01/10/2004'},
    {firstname:'Dwight', lastname:'Schrute', seniority:2, dep:'Sales', hired:'04/01/2004'},
    {firstname:'Jim', lastname:'Halpert', seniority:3, dep:'Sales', hired:'02/22/2006'},
    {firstname:'Kevin', lastname:'Malone', seniority:4, dep:'Accounting', hired:'06/10/2007'},
    {firstname:'Angela', lastname:'Martin', seniority:5, dep:'Accounting', hired:'10/21/2008'},
  ]
});

export function BasicGrid() {
  return <div className="card mb-3">
    <div className="card-header">Basic Grid</div>
    <div className="card-body">
      <Grid store={EmployeeStore}>
        <Column headerText="First Name" dataIndex="firstname" />
        <Column headerText="Last Name" dataIndex="lastname" />
        <Column headerText="Hired Month" dataIndex="hired" renderer={(value: string) => value.parseDate('MM/dd/yyyy').format('MMM')} />
        <Column headerText="Department (Yrs)" dataIndex="dep" renderer={(value: string, record: Employee) => `${value} (${record.seniority})`} />
      </Grid>
    </div>
    <div className="card-footer">
      <Highlight language="tsx">{`
import React from 'react';
import { DataStore } from '@roxie/core';

type Employee = {
  firstname: string,
  lastname: string,
  seniority: number,
  dep: string,
  hired: string,
}

const EmployeeStore = new DataStore<Employee>({
  data: [
    {firstname:'Michael', lastname:'Scott', seniority:7, dep:'Management', hired:'01/10/2004'},
    {firstname:'Dwight', lastname:'Schrute', seniority:2, dep:'Sales', hired:'04/01/2004'},
    {firstname:'Jim', lastname:'Halpert', seniority:3, dep:'Sales', hired:'02/22/2006'},
    {firstname:'Kevin', lastname:'Malone', seniority:4, dep:'Accounting', hired:'06/10/2007'},
    {firstname:'Angela', lastname:'Martin', seniority:5, dep:'Accounting', hired:'10/21/2008'},
  ]
});

function Employees() {
  return <Grid store={EmployeeStore}>
    <Column headerText="First Name" dataIndex="firstname" />
    <Column headerText="Last Name" dataIndex="lastname" />
    <Column headerText="Hired Month" dataIndex="hired" renderer={(value: string) => value.parseDate('MM/dd/yyyy').format('MMM')} />
    <Column headerText="Department (Yrs)" dataIndex="dep" renderer={(value: string, record: Employee) => \`$\{value} ($\{record.seniority})\`} />
  </Grid>
}
      `}</Highlight>
    </div>
  </div>
}

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

export function GridWithPaging() {
  useEffect(() => { UserStore.load() }, []);

  return <div className="card mb-3">
    <div className="card-header">Paging</div>
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
import React from 'react';
import { DataStore } from '@roxie/core';
import { Grid, Column, Paging } from '@roxie/components';

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

function Users() {
  useEffect(() => { UserStore.load() }, []);

  return <div className="card">
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
}
      `}</Highlight>
    </div>
  </div>
}