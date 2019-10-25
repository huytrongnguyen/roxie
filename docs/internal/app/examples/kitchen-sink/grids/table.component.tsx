import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { Container } from '@roxie/components';

export function TableExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/grids">Grids</Link></li>
      <li className="breadcrumb-item">Basic Table</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="card mb-3">
          <div className="card-header">Basic Table</div>
          <div className="card-body">
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr><th>Name</th><th>Email</th><th>Phone</th></tr>
              </thead>
              <tbody>
                <tr><td>Lisa</td><td>lisa@simpsons.com</td><td>555-111-1224</td></tr>
                <tr><td>Bart</td><td>bart@simpsons.com</td><td>555-222-1234</td></tr>
                <tr><td>Homer</td><td>home@simpsons.com</td><td>555-222-1244</td></tr>
                <tr><td>Marge</td><td>marge@simpsons.com</td><td>555-222-1254</td></tr>
                <tr className="table-active"><td>Active</td><td>Cell</td><td>Cell</td></tr>
                <tr className="table-primary"><td>Primary</td><td>Cell</td><td>Cell</td></tr>
                <tr className="table-secondary"><td>Secondary</td><td>Cell</td><td>Cell</td></tr>
                <tr className="table-success"><td>Success</td><td>Cell</td><td>Cell</td></tr>
                <tr className="table-danger"><td>Danger</td><td>Cell</td><td>Cell</td></tr>
                <tr className="table-warning"><td>Warning</td><td>Cell</td><td>Cell</td></tr>
                <tr className="table-info"><td>Info</td><td>Cell</td><td>Cell</td></tr>
                <tr className="table-light"><td>Light</td><td>Cell</td><td>Cell</td></tr>
                <tr className="table-dark"><td>Dark</td><td>Cell</td><td>Cell</td></tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<table className="table table-striped table-bordered table-hover">
  <thead>
    <tr><th>Name</th><th>Email</th><th>Phone</th></tr>
  </thead>
  <tbody>
    <tr><td>Lisa</td><td>lisa@simpsons.com</td><td>555-111-1224</td></tr>
    <tr><td>Bart</td><td>bart@simpsons.com</td><td>555-222-1234</td></tr>
    <tr><td>Homer</td><td>home@simpsons.com</td><td>555-222-1244</td></tr>
    <tr><td>Marge</td><td>marge@simpsons.com</td><td>555-222-1254</td></tr>
    <tr class="table-active"><td>Active</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-primary"><td>Primary</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-secondary"><td>Secondary</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-success"><td>Success</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-danger"><td>Danger</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-warning"><td>Warning</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-info"><td>Info</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-light"><td>Light</td><td>Cell</td><td>Cell</td></tr>
    <tr class="table-dark"><td>Dark</td><td>Cell</td><td>Cell</td></tr>
  </tbody>
</table>
            `}</Highlight>
          </div>
        </div>
      </div>
    </Container>
  </Container>
}