import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';

export function WindowExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item">Windows</li>
    </ol>
    <div className="pt-3">
      <div className="container">
        <div className="card">
          <div className="card-header">Basic Window</div>
          <div className="card-body">
            <div className="modal d-block position-relative" tabIndex={-1}>
              <div className="modal-dialog">
                <div className="modal-header">
                  <h5 className="modal-title">Window</h5>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed risus neque, mollis id auctor eget, aliquet vel augue.
                  Sed egestas fermentum tempus.
                  Praesent hendrerit eros et enim laoreet suscipit.
                  Nam diam ante, ullamcorper id congue non, accumsan non augue.
                  Aliquam non libero augue, vitae molestie orci.
                  Nulla ac enim nec velit rhoncus venenatis.
                  Aenean orci quam, eleifend ut aliquam iaculis, pellentesque ut arcu.
                  Suspendisse lobortis commodo magna, vitae sodales orci luctus vestibulum.
                  Cras eget ipsum sapien, vel dapibus metus.
                  Etiam sed augue sit amet massa commodo commodo.
                  Nam pellentesque dapibus ipsum.
                  Proin eget malesuada magna.
                  Curabitur elit diam, pellentesque id fermentum eget, congue ultricies nibh.
                  Nunc tincidunt sem at diam porta tincidunt.
                  Suspendisse fringilla felis in lectus blandit vulputate.
                  Suspendisse mollis ipsum nec ante congue ut porttitor nunc bibendum.
                  Maecenas mollis sem non justo iaculis vitae consequat augue pulvinar.
                  Sed aliquet malesuada lobortis.
                  Maecenas malesuada eros sed erat ultricies eleifend.
                  Nulla facilisi.
                  Pellentesque pharetra molestie mollis.
                  Aenean venenatis tempus urna, quis convallis quam cursus eget.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary">OK</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`

            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}