import React, { Fragment } from 'react';

export function ThemingConcept() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="card card-body mb-3">
          <h2>Theming</h2>
          <p>
            Roxie includes a theming API that allows you to configure the look and feel of components.
            Roxie contains several built in themes:
          </p>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Theme</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>roxie-theme-light</td>
                <td>Light theme</td>
              </tr>
              <tr>
                <td>roxie-theme-dark</td>
                <td>Dark theme</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Fragment>
}