import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { Container } from '@roxie/components';

export function FormFieldTypeExample() {
  const [numberValue, setNumberValue] = useState('5');

  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components/form-fields">Form Fields</Link></li>
      <li className="breadcrumb-item">Field Types</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="card mb-3">
          <div className="card-header">Basic Form Fields</div>
          <div className="card-body">
            <div className="form-group row">
              <label className="col-2 col-form-label text-right">Text Field:</label>
              <div className="col-10">
                <input type="text" className="form-control" placeholder="Text field value" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label text-right">Password Field:</label>
              <div className="col-10">
                <input type="password" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label text-right">File Upload:</label>
              <div className="col-10">
                <input type="file" className="form-control-file" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label text-right">TextArea:</label>
              <div className="col-10">
                <textarea className="form-control" rows={3}></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label text-right">Display Field:</label>
              <div className="col-10">
                <input type="text" readOnly className="form-control-plaintext" value="Display field value" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label text-right">Number Field:</label>
              <div className="col-10">
                <input type="number" className="form-control" value={numberValue} onChange={event => setNumberValue(event.target.value)} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label text-right">Checkbox:</label>
              <div className="col-10">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="checkbox1" />
                  <label className="custom-control-label" htmlFor="checkbox1">box label</label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label text-right">Radio buttons:</label>
              <div className="col-10">
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" name="radioOptions" id="radio1" />
                  <label className="custom-control-label" htmlFor="radio1">radio 1</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" name="radioOptions" id="radio2" />
                  <label className="custom-control-label" htmlFor="radio2">radio 2</label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label text-right">Switch:</label>
              <div className="col-10">
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="switch1" />
                  <label className="custom-control-label" htmlFor="switch1">switch control</label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label text-right">Slider Field:</label>
              <div className="col-10">
                <input type="range" className="custom-range" />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<div class="form-group row">
  <label class="col-2 col-form-label">Text Field</label>
  <div class="col-10">
    <input type="text" class="form-control" placeholder="Text field value" />
  </div>
</div>
<div class="form-group row">
  <label class="col-2 col-form-label text-right">Password Field:</label>
  <div class="col-10">
    <input type="password" class="form-control" />
  </div>
</div>
<div class="form-group row">
  <label class="col-2 col-form-label text-right">File Upload:</label>
  <div class="col-10">
    <input type="file" class="form-control-file" />
  </div>
</div>
<div class="form-group row">
  <label class="col-2 col-form-label text-right">TextArea:</label>
  <div class="col-10">
    <textarea class="form-control" rows="3"></textarea>
  </div>
</div>
<div class="form-group row">
  <label class="col-2 col-form-label text-right">Display Field:</label>
  <div class="col-10">
    <input type="text" readOnly class="form-control-plaintext" value="Display field value" />
  </div>
</div>
<div class="form-group row">
  <label class="col-2 col-form-label text-right">Number Field:</label>
  <div class="col-10">
    <input type="number" class="form-control" value="5" />
  </div>
</div>
<div class="form-group row">
  <label class="col-2 col-form-label text-right">Checkbox:</label>
  <div class="col-10">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="checkbox1" />
      <label class="custom-control-label" for="checkbox1">box label</label>
    </div>
  </div>
</div>
<div class="form-group row">
  <label class="col-2 col-form-label text-right">Radio buttons:</label>
  <div class="col-10">
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" class="custom-control-input" name="radioOptions" id="radio1" />
      <label class="custom-control-label" for="radio1">radio 1</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" class="custom-control-input" name="radioOptions" id="radio2" />
      <label class="custom-control-label" for="radio2">radio 2</label>
    </div>
  </div>
</div>
<div class="form-group row">
  <label class="col-2 col-form-label text-right">Switch:</label>
  <div class="col-10">
    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="switch1" />
      <label class="custom-control-label" for="switch1">switch control</label>
    </div>
  </div>
</div>
<div class="form-group row">
  <label class="col-2 col-form-label text-right">Slider Field:</label>
  <div class="col-10">
    <input type="range" class="custom-range" />
  </div>
</div>
            `}</Highlight>
          </div>
        </div>
      </div>
    </Container>
  </Container>
}