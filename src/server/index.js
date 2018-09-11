import '@babel/polyfill';
import express from 'express';
import layout from './_layout';

export const RoxieServer = config => _ => {
  const server = express(),
        port = process.env.PORT || config.port || 3000,
        render = config.layout || layout,
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
    err && console.log(`App failed to start caused by ${err.message}`);
    !err && console.log(`Now listening on: http://localhost:${port}\nApplication started. Press Ctrl+C to shut down.`);
  });
}

export * from './page';
export * from './controller';