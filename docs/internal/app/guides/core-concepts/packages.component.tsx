import React, { Fragment } from 'react';

export function PackageConcept() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Roxie Packages</h2>
        <p>
          Roxie contains several npm packages that can be installed via NPM.
          All Roxie NPM packages use name space @roxie
        </p>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Package</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>@roxie/core</code></td>
              <td>All core functions</td>
            </tr>
            <tr>
              <td><code>@roxie/ui</code></td>
              <td>All Roxie themes</td>
            </tr>
            <tr>
              <td><code>@roxie/components</code></td>
              <td>All React components</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Fragment>
}