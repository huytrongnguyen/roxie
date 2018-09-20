import '@babel/polyfill';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import _layout from './_layout.html';

export const server = config => {
  const server = express(),
        port = process.env.PORT || config.port || 3000,
        layout = config.layout || _layout,
        pages = config.pages || [],
        controllers = config.controllers || [];

  pages.forEach(page => {
    console.log(`GET ${page.$route}`);
    server.get(page.$route, async(req, res) => {
      page.onGet && (await page.onGet({ ...req.params, ...req.query, requestBody: req.body }));
      const view = render(page.$component, page);
      res.send(view);
    });
  });

  controllers.forEach(ctrl => {
    (ctrl.$routes || []).forEach(({ method, actionName, action }) => {
      let path = '/';
      if (ctrl.$routePath) {
        path += ctrl.$routePath;
      }
      if (actionName) {
        path += `${path === '/' ? '' : '/'}${actionName}`;
      }
      console.log(`${method.toUpperCase()} ${path}`);
      action = action.bind(ctrl); // bind controller in here to use `this` keyword inside method
      server[method.toLowerCase()](path, async (req, res) => {
        res.json(await action({ ...req.params, ...req.query, requestBody: req.body }));
      });
    });
  });

  console.log('Hosting environment: Production');
  server.use(express.json());

  if (config.staticFiles) {
    console.log(`Content root path: ${config.staticFiles}`);
    server.use('/', express.static(config.staticFiles));
  }

  server.listen(port, err => {
    if (err) {
      console.log(`App failed to start caused by ${err.message}`);
      return;
    }
    console.log(`Now listening on: http://localhost:${port}`);
    console.log(`Application started. Press Ctrl+C to shut down.`);
  });
}

export * from './page';
export * from './controller';