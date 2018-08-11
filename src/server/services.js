import express from 'express';

const defaultAppSettings = {
  port: 3000,
};

export default class Services {
  constructor(app) {
    this.app = app;
    this.appSettings = defaultAppSettings;
  }

  addAppSettings(appSettings = defaultAppSettings) {
    this.appSettings = appSettings;
    return this;
  }

  addController(controller) {
    (controller.$routes || []).forEach(({ method, actionName, action }) => {
      let path = '/';
      if (controller.$routePath && controller.$routePath !== 'home') {
        path += controller.$routePath;
      }
      if (actionName && actionName !== 'index') {
        path += `${path === '/' ? '' : '/'}${actionName}`;
      }
      action = action.bind(controller); // bind controller in here to use `this` keyword inside method
      this.app[method.toLowerCase()](path, async (req, res) => {
        const responseMethod = path.startsWith('/api') ? 'json' : 'send', // FIXME find the solution to detect controller or rest
              responseValue = await action({ ...req.params, ...req.query, requestBody: req.body });
        res[responseMethod](responseValue);
      });
      console.log(`${method.toUpperCase()} ${path}`);
    });
    return this;
  }

  useStaticFiles(content) {
    this.app.use('/', express.static(content));
    return this;
  }
}