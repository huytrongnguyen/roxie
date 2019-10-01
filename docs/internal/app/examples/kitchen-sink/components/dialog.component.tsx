import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { Dialog } from '@roxie/components';

export function DialogExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item">Dialogs</li>
    </ol>
    <div className="pt-3">
      <div className="container">
        <div className="card mb-3">
          <div className="card-header">Basic Dialog</div>
          <div className="card-body">
            <div className="modal d-block position-relative" tabIndex={-1} style={{zIndex: 1}}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Dialog</h5>
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
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<div class="modal" tabIndex="1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Dialog</h5>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
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
    </div>
  </div>
</div>
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Popup Dialog</div>
          <div className="card-body">
            <button type="button" className="btn btn-default" data-toggle="modal" data-target="#popup-dialog">Open Dialog</button>
            <Dialog id="popup-dialog" title="New message">
              <div className="form-group">
                <label className="col-form-label">Recipient:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label className="col-form-label">Message:</label>
                <textarea className="form-control"></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-outline-secondary mr-1" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Send</button>
              </div>
            </Dialog>
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React from 'react';
import { Dialog } from '@roxie/components';

<button type="button" className="btn btn-default" data-toggle="modal" data-target="#popup-dialog">Open Dialog</button>
<Dialog id="popup-dialog" title="New message">
  <div className="form-group">
    <label className="col-form-label">Recipient:</label>
    <input type="text" className="form-control" />
  </div>
  <div className="form-group">
    <label className="col-form-label">Message:</label>
    <textarea className="form-control"></textarea>
  </div>
  <div className="d-flex justify-content-end">
    <button type="button" className="btn btn-outline-secondary mr-1" data-dismiss="modal">Cancel</button>
    <button type="button" className="btn btn-primary">Send</button>
  </div>
</Dialog>
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}