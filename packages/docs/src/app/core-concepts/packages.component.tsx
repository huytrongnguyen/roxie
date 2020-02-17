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
              <th>Version</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>@roxie/core</code></td>
              <td>
                <a href="https://www.npmjs.com/package/@roxie/core" className="mr-1"><img src="https://img.shields.io/npm/v/@roxie/core" /></a>
                <a href="https://www.npmjs.com/package/@roxie/core"><img src="https://img.shields.io/npm/dm/@roxie/core" /></a>
              </td>
              <td>All core functions</td>
            </tr>
            <tr>
              <td><code>@roxie/ui</code></td>
              <td>
                <a href="https://www.npmjs.com/package/@roxie/ui" className="mr-1"><img src="https://img.shields.io/npm/v/@roxie/ui" /></a>
                <a href="https://www.npmjs.com/package/@roxie/ui"><img src="https://img.shields.io/npm/dm/@roxie/ui" /></a>
              </td>
              <td>All Roxie themes</td>
            </tr>
            <tr>
              <td><code>@roxie/components</code></td>
              <td>
                <a href="https://www.npmjs.com/package/@roxie/components" className="mr-1"><img src="https://img.shields.io/npm/v/@roxie/components" /></a>
                <a href="https://www.npmjs.com/package/@roxie/components"><img src="https://img.shields.io/npm/dm/@roxie/components" /></a>
              </td>
              <td>All React components</td>
            </tr>
            <tr>
              <td><code>@roxie/server</code></td>
              <td>
                <a href="https://www.npmjs.com/package/@roxie/server" className="mr-1"><img src="https://img.shields.io/npm/v/@roxie/server" /></a>
                <a href="https://www.npmjs.com/package/@roxie/server"><img src="https://img.shields.io/npm/dm/@roxie/server" /></a>
              </td>
              <td>All server functions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Fragment>
}