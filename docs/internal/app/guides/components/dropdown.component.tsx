import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';
import { Dropdown } from '@roxie/components';

const data = [
  { name:'Alabama', abbrev:'AL' },
  { name:'Alaska',  abbrev:'AK' },
  { name:'Arizona', abbrev:'AZ' },
]

export function DropdownComponent() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Dropdown</h2>
        <p>
          A Dropdown is like a combination of a traditional HTML text <code>input</code> field and a <code>select</code> field.
          The selection list's options are populated from any array.
          The data items in the array are mapped to each option's displayed text and backing value via the <code>valueField</code> and <code>displayField</code> props
        </p>
        <div className="card mb-3">
          <div className="card-body">
            <Dropdown options={data} valueField="abbrev" displayField="name" />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React, { Fragment } from 'react';
import { Dropdown } from '@roxie/components';

const data = [
  { name:'Alabama', abbrev:'AL' },
  { name:'Alaska',  abbrev:'AK' },
  { name:'Arizona', abbrev:'AZ' },
]

function States() {
  return <Dropdown options={data} valueField="abbrev" displayField="name" />
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}