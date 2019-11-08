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
        <BasicTable />
        <BasicGrid />
        <GridWithPaging />
      </div>
    </Container>
  </Container>
}

export function BasicTable() {
  return <div className="card mb-3">
    <div className="card-header">Basic Table</div>
    <div className="card-body">
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Phone</th></tr>
        </thead>
        <tbody>
          <tr><td>Lisa</td><td>lisa@simpsons.com</td><td>555-111-1224</td></tr>
          <tr><td>Bart</td><td>bart@simpsons.com</td><td>555-222-1234</td></tr>
          <tr><td>Homer</td><td>home@simpsons.com</td><td>555-222-1244</td></tr>
          <tr><td>Marge</td><td>marge@simpsons.com</td><td>555-222-1254</td></tr>
          <tr className="table-active"><td>Active</td><td>Cell</td><td>Cell</td></tr>
          <tr className="table-primary"><td>Primary</td><td>Cell</td><td>Cell</td></tr>
          <tr className="table-secondary"><td>Secondary</td><td>Cell</td><td>Cell</td></tr>
          <tr className="table-success"><td>Success</td><td>Cell</td><td>Cell</td></tr>
          <tr className="table-danger"><td>Danger</td><td>Cell</td><td>Cell</td></tr>
          <tr className="table-warning"><td>Warning</td><td>Cell</td><td>Cell</td></tr>
          <tr className="table-info"><td>Info</td><td>Cell</td><td>Cell</td></tr>
          <tr className="table-light"><td>Light</td><td>Cell</td><td>Cell</td></tr>
          <tr className="table-dark"><td>Dark</td><td>Cell</td><td>Cell</td></tr>
        </tbody>
      </table>
    </div>
    <div className="card-footer">
      <Highlight language="tsx">{`
<table className="table table-striped table-bordered table-hover">
  <thead>
    <tr><th>Name</th><th>Email</th><th>Phone</th></tr>
  </thead>
  <tbody>
    <tr><td>Lisa</td><td>lisa@simpsons.com</td><td>555-111-1224</td></tr>
    <tr><td>Bart</td><td>bart@simpsons.com</td><td>555-222-1234</td></tr>
    <tr><td>Homer</td><td>home@simpsons.com</td><td>555-222-1244</td></tr>
    <tr><td>Marge</td><td>marge@simpsons.com</td><td>555-222-1254</td></tr>
    <tr class="table-active"><td>Active</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-primary"><td>Primary</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-secondary"><td>Secondary</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-success"><td>Success</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-danger"><td>Danger</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-warning"><td>Warning</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-info"><td>Info</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-light"><td>Light</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-dark"><td>Dark</td><td>Cell</td><td>Cell</td></tr>
  </tbody>
</table>
      `}</Highlight>
    </div>
  </div>
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