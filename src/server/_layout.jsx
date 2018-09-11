import React from 'react';
import { renderToString } from 'react-dom/server';

export default (component, model) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Roxie</title>
      </head>
      <body>
        ${renderToString(React.createElement(component, model))}
      </body>
    </html>
  `;
}