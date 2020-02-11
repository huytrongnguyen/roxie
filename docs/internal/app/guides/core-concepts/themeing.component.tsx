import React, { Fragment } from 'react';

export function ThemingConcept() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
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
            <tr>
              <td>roxie-theme-gray</td>
              <td>Gray theme</td>
            </tr>
            <tr>
              <td>roxie-theme-blue</td>
              <td>Blue theme</td>
            </tr>
            <tr>
              <td>roxie-theme-blueprint</td>
              <td>Blueprint theme</td>
            </tr>
            <tr>
              <td>roxie-theme-triton</td>
              <td>Triton theme</td>
            </tr>
            <tr>
              <td>roxie-theme-ios</td>
              <td>iOS classic theme</td>
            </tr>
            <tr>
              <td>roxie-theme-macos</td>
              <td>macOS classic theme</td>
            </tr>
            <tr>
              <td>roxie-theme-coreui</td>
              <td>CoreUI theme</td>
            </tr>
            <tr>
              <td>roxie-theme-coreui-dark</td>
              <td>CoreUI dark theme</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Fragment>
}