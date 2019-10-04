import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';
import { Dialog } from '@roxie/components';

export function GridComponent() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Grid</h2>
        <p>
          This class provides a convenient way to display a "popup" component.
          Dialogs are not subject to the restrictions of browser popup windows, but provide similar modal experiences.
        </p>
        <div className="card mb-3">
          <div className="card-body">
            <button type="button" className="btn btn-default" data-toggle="modal" data-target="#dialog">Show Dialog</button>
            <Dialog id="dialog" title="Dialog">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-outline-secondary mr-1" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">OK</button>
              </div>
            </Dialog>
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React from 'react';
import { Dialog } from '@roxie/components';

<button type="button" className="btn btn-default" data-toggle="modal" data-target="#dialog">Show Dialog</button>
<Dialog id="dialog" title="Dialog">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <div className="d-flex justify-content-end">
    <button type="button" className="btn btn-outline-secondary mr-1" data-dismiss="modal">Cancel</button>
    <button type="button" className="btn btn-primary">OK</button>
  </div>
</Dialog>
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}