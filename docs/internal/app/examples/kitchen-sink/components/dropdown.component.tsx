import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { Dropdown } from '@roxie/components';

const states: [ number, string, string, string ][] = [
  [0, 'AL', 'Alabama', 'The Heart of Dixie'],
  [1, 'AK', 'Alaska', 'The Land of the Midnight Sun'],
  [2, 'AZ', 'Arizona', 'The Grand Canyon State'],
  [3, 'AR', 'Arkansas', 'The Natural State'],
  [4, 'CA', 'California', 'The Golden State'],
  [5, 'CO', 'Colorado', 'The Mountain State'],
  [6, 'CT', 'Connecticut', 'The Constitution State'],
  [7, 'DE', 'Delaware', 'The First State'],
  [8, 'DC', 'District of Columbia', "The Nation's Capital"],
  [9, 'FL', 'Florida', 'The Sunshine State'],
  [10, 'GA', 'Georgia', 'The Peach State'],
  [11, 'HI', 'Hawaii', 'The Aloha State'],
  [12, 'ID', 'Idaho', 'Famous Potatoes'],
  [13, 'IL', 'Illinois', 'The Prairie State'],
  [14, 'IN', 'Indiana', 'The Hospitality State'],
  [15, 'IA', 'Iowa', 'The Corn State'],
  [16, 'KS', 'Kansas', 'The Sunflower State'],
  [17, 'KY', 'Kentucky', 'The Bluegrass State'],
  [18, 'LA', 'Louisiana', 'The Bayou State'],
  [19, 'ME', 'Maine', 'The Pine Tree State'],
  [20, 'MD', 'Maryland', 'Chesapeake State'],
  [21, 'MA', 'Massachusetts', 'The Spirit of America'],
  [22, 'MI', 'Michigan', 'Great Lakes State'],
  [23, 'MN', 'Minnesota', 'North Star State'],
  [24, 'MS', 'Mississippi', 'Magnolia State'],
  [25, 'MO', 'Missouri', 'Show Me State'],
  [26, 'MT', 'Montana', 'Big Sky Country'],
  [27, 'NE', 'Nebraska', 'Beef State'],
  [28, 'NV', 'Nevada', 'Silver State'],
  [29, 'NH', 'New Hampshire', 'Granite State'],
  [30, 'NJ', 'New Jersey', 'Garden State'],
  [31, 'NM', 'New Mexico', 'Land of Enchantment'],
  [32, 'NY', 'New York', 'Empire State'],
  [33, 'NC', 'North Carolina', 'First in Freedom'],
  [34, 'ND', 'North Dakota', 'Peace Garden State'],
  [35, 'OH', 'Ohio', 'The Heart of it All'],
  [36, 'OK', 'Oklahoma', 'Oklahoma is OK'],
  [37, 'OR', 'Oregon', 'Pacific Wonderland'],
  [38, 'PA', 'Pennsylvania', 'Keystone State'],
  [39, 'RI', 'Rhode Island', 'Ocean State'],
  [40, 'SC', 'South Carolina', 'Nothing Could be Finer'],
  [41, 'SD', 'South Dakota', 'Great Faces, Great Places'],
  [42, 'TN', 'Tennessee', 'Volunteer State'],
  [43, 'TX', 'Texas', 'Lone Star State'],
  [44, 'UT', 'Utah', 'Salt Lake State'],
  [45, 'VT', 'Vermont', 'Green Mountain State'],
  [46, 'VA', 'Virginia', 'Mother of States'],
  [47, 'WA', 'Washington', 'Green Tree State'],
  [48, 'WV', 'West Virginia', 'Mountain State'],
  [49, 'WI', 'Wisconsin', "America's Dairyland"],
  [50, 'WY', 'Wyoming', 'Like No Place on Earth'],
]

type State = {
  abbr: string,
  name: string,
}

export function DropdownExample() {
  const [stateList] = useState(states.map(state => { return { abbr: state[1], name: state[2] } as State })),
        [selectedStates, setSelectedStates] = useState([] as State[]);

  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components/form-fields">Form Fields</Link></li>
      <li className="breadcrumb-item">Dropdown</li>
    </ol>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="card mb-3">
          <div className="card-body">
            <Dropdown options={stateList} multiple
                      displayField="name" valueField="abbr"
                      value={selectedStates} valueChange={setSelectedStates} />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
const states: [ number, string, string, string ][] = [
  [0, 'AL', 'Alabama', 'The Heart of Dixie'],
  [1, 'AK', 'Alaska', 'The Land of the Midnight Sun'],
  [2, 'AZ', 'Arizona', 'The Grand Canyon State'],
  [3, 'AR', 'Arkansas', 'The Natural State'],
  [4, 'CA', 'California', 'The Golden State'],
  [5, 'CO', 'Colorado', 'The Mountain State'],
  [6, 'CT', 'Connecticut', 'The Constitution State'],
  [7, 'DE', 'Delaware', 'The First State'],
  [8, 'DC', 'District of Columbia', "The Nation's Capital"],
  [9, 'FL', 'Florida', 'The Sunshine State'],
  [10, 'GA', 'Georgia', 'The Peach State'],
  [11, 'HI', 'Hawaii', 'The Aloha State'],
  [12, 'ID', 'Idaho', 'Famous Potatoes'],
  [13, 'IL', 'Illinois', 'The Prairie State'],
  [14, 'IN', 'Indiana', 'The Hospitality State'],
  [15, 'IA', 'Iowa', 'The Corn State'],
  [16, 'KS', 'Kansas', 'The Sunflower State'],
  [17, 'KY', 'Kentucky', 'The Bluegrass State'],
  [18, 'LA', 'Louisiana', 'The Bayou State'],
  [19, 'ME', 'Maine', 'The Pine Tree State'],
  [20, 'MD', 'Maryland', 'Chesapeake State'],
  [21, 'MA', 'Massachusetts', 'The Spirit of America'],
  [22, 'MI', 'Michigan', 'Great Lakes State'],
  [23, 'MN', 'Minnesota', 'North Star State'],
  [24, 'MS', 'Mississippi', 'Magnolia State'],
  [25, 'MO', 'Missouri', 'Show Me State'],
  [26, 'MT', 'Montana', 'Big Sky Country'],
  [27, 'NE', 'Nebraska', 'Beef State'],
  [28, 'NV', 'Nevada', 'Silver State'],
  [29, 'NH', 'New Hampshire', 'Granite State'],
  [30, 'NJ', 'New Jersey', 'Garden State'],
  [31, 'NM', 'New Mexico', 'Land of Enchantment'],
  [32, 'NY', 'New York', 'Empire State'],
  [33, 'NC', 'North Carolina', 'First in Freedom'],
  [34, 'ND', 'North Dakota', 'Peace Garden State'],
  [35, 'OH', 'Ohio', 'The Heart of it All'],
  [36, 'OK', 'Oklahoma', 'Oklahoma is OK'],
  [37, 'OR', 'Oregon', 'Pacific Wonderland'],
  [38, 'PA', 'Pennsylvania', 'Keystone State'],
  [39, 'RI', 'Rhode Island', 'Ocean State'],
  [40, 'SC', 'South Carolina', 'Nothing Could be Finer'],
  [41, 'SD', 'South Dakota', 'Great Faces, Great Places'],
  [42, 'TN', 'Tennessee', 'Volunteer State'],
  [43, 'TX', 'Texas', 'Lone Star State'],
  [44, 'UT', 'Utah', 'Salt Lake State'],
  [45, 'VT', 'Vermont', 'Green Mountain State'],
  [46, 'VA', 'Virginia', 'Mother of States'],
  [47, 'WA', 'Washington', 'Green Tree State'],
  [48, 'WV', 'West Virginia', 'Mountain State'],
  [49, 'WI', 'Wisconsin', "America's Dairyland"],
  [50, 'WY', 'Wyoming', 'Like No Place on Earth'],
]

type State = {
  abbr: string,
  name: string,
}

function Example() {
  const [stateList] = useState(states.map(state => { return { abbr: state[1], name: state[2] } as State })),
        [selectedStates, setSelectedStates] = useState([] as State[]);

  return <Dropdown  options={stateList} multiple
                    displayField="name" valueField="abbr"
                    value={selectedStates} valueChange={setSelectedStates} />
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}