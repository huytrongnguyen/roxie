import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';

export function ButtonExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item">Buttons</li>
    </ol>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="card mb-3">
          <div className="card-header">Basic Buttons</div>
          <div className="card-body">
            <div>
              <button type="button" className="btn btn-primary mr-1">Primary</button>
              <button type="button" className="btn btn-secondary mr-1">Secondary</button>
              <button type="button" className="btn btn-success mr-1">Success</button>
              <button type="button" className="btn btn-danger mr-1">Danger</button>
              <button type="button" className="btn btn-warning mr-1">Warning</button>
              <button type="button" className="btn btn-info mr-1">Info</button>
              <button type="button" className="btn btn-light mr-1">Light</button>
              <button type="button" className="btn btn-dark mr-1">Dark</button>
            </div>
            <div className="mt-1">
              <button type="button" className="btn btn-outline-primary mr-1">Primary</button>
              <button type="button" className="btn btn-outline-secondary mr-1">Secondary</button>
              <button type="button" className="btn btn-outline-success mr-1">Success</button>
              <button type="button" className="btn btn-outline-danger mr-1">Danger</button>
              <button type="button" className="btn btn-outline-warning mr-1">Warning</button>
              <button type="button" className="btn btn-outline-info mr-1">Info</button>
              <button type="button" className="btn btn-outline-light mr-1">Light</button>
              <button type="button" className="btn btn-outline-dark mr-1">Dark</button>
            </div>
            <div className="mt-1">
              <button type="button" className="btn btn-default mr-1">Default</button>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>

<button type="button" class="btn btn-default">Default</button>
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Custom Buttons</div>
          <div className="card-body">
            <button type="button" className="btn btn-default btn-lg mr-1">Large</button>
            <button type="button" className="btn btn-default mr-1">Medium</button>
            <button type="button" className="btn btn-default btn-sm mr-1">Small</button>
            <button type="button" className="btn btn-link mr-1">Link</button>
            <button type="button" className="btn btn-outline-primary mr-1" data-toggle="button">Toggle</button>
            <button type="button" className="btn btn-default mr-1" disabled>Disabled</button>
            <button type="button" className="btn btn-default mr-1"><i className="fa fa-home" /></button>
            <button type="button" className="btn btn-default mr-1"><i className="fa fa-home mr-1" />Home</button>
            <button type="button" className="btn btn-default btn-block mt-1 mr-1">Block</button>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<button type="button" class="btn btn-default btn-lg">Large</button>
<button type="button" class="btn btn-default">Medium</button>
<button type="button" class="btn btn-default btn-sm">Small</button>
<button type="button" class="btn btn-link">Link</button>
<button type="button" class="btn btn-outline-primary" data-toggle="button">Toggle</button>
<button type="button" class="btn btn-default" disabled>Disabled</button>
<button type="button" class="btn btn-default"><i class="fa fa-home"></i></button>
<button type="button" class="btn btn-default"><i class="fa fa-home mr-1"></i>Home</button>
<button type="button" class="btn btn-default btn-block">Block</button>
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Menu Buttons</div>
          <div className="card-body d-flex flex-row">
            <div className="btn-group mr-1">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">Dropdown Button</button>
              <div className="dropdown-menu">
                <span className="dropdown-item">Menu Item 1</span>
                <span className="dropdown-item active">Menu Item 2</span>
                <span className="dropdown-item disabled">Menu Item 3</span>
              </div>
            </div>
            <div className="btn-group mr-1">
              <button type="button" className="btn btn-default">Split Button</button>
              <button type="button" className="btn btn-default dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" />
              <div className="dropdown-menu dropdown-menu-right">
                <span className="dropdown-item">Menu Item 1</span>
                <span className="dropdown-item active">Menu Item 2</span>
                <span className="dropdown-item disabled">Menu Item 3</span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Dropdown Button</button>
  <div class="dropdown-menu">
    <span class="dropdown-item">Menu Item 1</span>
    <span class="dropdown-item active">Menu Item 2</span>
    <span class="dropdown-item disabled">Menu Item 3</span>
  </div>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-default">Split Button</button>
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"></button>
  <div class="dropdown-menu dropdown-menu-right">
    <span class="dropdown-item">Menu Item 1</span>
    <span class="dropdown-item active">Menu Item 2</span>
    <span class="dropdown-item disabled">Menu Item 3</span>
  </div>
</div>
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Group of Buttons</div>
          <div className="card-body">
            <div className="btn-group">
              <button type="button" className="btn btn-outline-secondary">Left</button>
              <button type="button" className="btn btn-outline-secondary">Middle</button>
              <button type="button" className="btn btn-outline-secondary">Right</button>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<button type="button" class="btn btn-outline-secondary">Left</button>
<button type="button" class="btn btn-outline-secondary">Middle</button>
<button type="button" class="btn btn-outline-secondary">Right</button>
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}