import React, { useState, useCallback } from 'react';
import Highlight from 'react-highlight.js';

export function ViewController() {
  return <>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>ViewController in Roxie</h2>
        <p>
          In such environments, views and controllers may be authored by multiple development teams and integrated into the final application.
          Ensuring that controllers only react to their intended views can be difficult.
          Further, it is common for developers to want to limit the number of controllers created at application launch.
          While lazily creating controllers is possible with some effort, they can’t be destroyed, so they remain even if they are no longer needed.
        </p>
        <div className="card">
          <div className="card-body">
            <Foo />
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React, { useState, useCallback } from 'react';

function fooController() {
  const [bar, setBar] = useState('');

  function onBarChange(value: string) {
    setBar(value);
  }

  return {
    bar,
    onBarChange: useCallback(onBarChange, []),
  }
}

function Foo() {
  const fooCtrl = fooController();

  return <>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Bar</span>
      </div>
      <input type="text" className="form-control" value={fooCtrl.bar} onChange={event => fooCtrl.onBarChange(event.target.value)} />
    </div>
    <div>Bar value: {fooCtrl.bar}</div>
  </>
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </>
}

function fooController() {
  const [bar, setBar] = useState('');

  function onBarChange(value: string) {
    setBar(value);
  }

  return {
    bar,
    onBarChange: useCallback(onBarChange, []),
  }
}

function Foo() {
  const fooCtrl = fooController();

  return <>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Bar</span>
      </div>
      <input type="text" className="form-control" value={fooCtrl.bar} onChange={event => fooCtrl.onBarChange(event.target.value)} />
    </div>
    <div>Bar value: {fooCtrl.bar}</div>
  </>
}