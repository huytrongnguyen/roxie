import React, { Fragment, useState } from 'react';
import Highlight from 'react-highlight.js';
import { DataStore } from '@roxie/core';
import { Dropdown } from '@roxie/components';

type State = {
  abbrev: string,
  name: string,
}

const StateStore = new DataStore<State>({
  data: [
    { name:'Alabama', abbrev:'AL' },
    { name:'Alaska',  abbrev:'AK' },
    { name:'Arizona', abbrev:'AZ' },
  ],
});

export function DropdownComponent() {
  const [selectedValues, setSelectedValues] = useState([]);

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
            <Dropdown store={StateStore} valueField="abbrev" displayField="name" multiple
                      value={selectedValues} valueChange={setSelectedValues} />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React, { Fragment } from 'react';
import { Dropdown } from '@roxie/components';

const StateStore = new DataStore<State>({
  data: [
    { name:'Alabama', abbrev:'AL' },
    { name:'Alaska',  abbrev:'AK' },
    { name:'Arizona', abbrev:'AZ' },
  ],
});

function States() {
  return <Dropdown  store={StateStore} valueField="abbrev" displayField="name" multiple
                    value={selectedValues} valueChange={setSelectedValues} />
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}