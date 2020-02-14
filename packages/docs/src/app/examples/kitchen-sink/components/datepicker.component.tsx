import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { Container, DatePickerPortal, DatePicker } from '@roxie/components';
import { Roxie } from '@roxie/core';

export function DatePickerExample() {
  const [selectedDate, setSelectedDate] = useState(new Date()),
        [endDate, setEndDate] = useState(new Date()),
        [startDate, setStartDate] = useState(Roxie.Date.subMonths(endDate, 1));

  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components/form-fields">Form Fields</Link></li>
      <li className="breadcrumb-item">Date Picker</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="card mb-3">
          <div className="card-header">Date Picker Portal</div>
          <div className="card-body">
            <DatePickerPortal />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import { DatePickerPortal } from '@roxie/components';

function Example() {
  return <DatePickerPortal />
}
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Date Picker</div>
          <div className="card-body">
            <div className="d-inline-block">
              <DatePicker dateFormat="MMM d, yyyy" value={selectedDate} onChange={setSelectedDate} />
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import { DatePicker } from '@roxie/components';

function Example() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return <DatePicker dateFormat="MMM d, yyyy" value={selectedDate} onChange={setSelectedDate} />
}
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Custom Date Picker</div>
          <div className="card-body">
            <div className="d-inline-block">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-calendar" /></span>
                </div>
                <DatePicker value={startDate} onChange={setStartDate} />
                <DatePicker value={endDate} onChange={setEndDate} />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React, { useState } from 'react';
import { Roxie } from '@roxie/core';
import { DatePicker } from '@roxie/components';

function Example() {
  const [endDate, setEndDate] = useState(new Date()),
        [startDate, setStartDate] = useState(Roxie.Date.subMonths(endDate, 1));

  return <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text"><i className="fa fa-calendar" /></span>
    </div>
    <DatePicker value={startDate} onChange={setStartDate} />
    <DatePicker value={endDate} onChange={setEndDate} />
  </div>
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </Container>
  </Container>
}