import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';
// import { Dialog } from '@roxie/components';

export function DialogComponent() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="card card-body mb-3">
          <h2>Dialog</h2>
          <p>
            This class provides a convenient way to display a "popup" component.
            Dialogs are not subject to the restrictions of browser popup windows, but provide similar modal experiences.
          </p>
          <div className="card mb-3">
            <div className="card-body">
              <button type="button" className="btn btn-default">Show Dialog</button>
            </div>
            <div className="card-footer">
              <Highlight language="tsx">{`
import React, { Fragment, useState, useEffect } from 'react';
import { DataStore } from '@roxie/core';

type Area = {
  name: string,
  data1: number,
  data2: number,
  data3: number,
}

const AreaStore = new DataStore<Area[]>({
  data: [
    { 'name': 'metric one', 'data1': 10, 'data2': 12, 'data3': 14 },
    { 'name': 'metric two', 'data1': 7, 'data2': 8, 'data3': 16 },
    { 'name': 'metric three', 'data1': 5, 'data2': 2, 'data3': 14 },
    { 'name': 'metric four', 'data1': 2, 'data2': 14, 'data3': 6 },
    { 'name': 'metric five', 'data1': 27, 'data2': 38, 'data3': 36 },
  ]
});

function AreaExample() {
  return <Cartesian store={AreaStore}
    series={{ type: 'area', xField: 'name', yField: ['data1', 'data2', 'data3'] }}
    axes={{ type: 'category', position: 'bottom' }}
  />
}
              `}</Highlight>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}