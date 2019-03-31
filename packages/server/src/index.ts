import express, { Application, Request, Response } from 'express';

import { logInfo, logError } from '@roxie/core';

interface AppConfig {
  port?: number;
  rootPath?: string;
  staticPath?: any;
  configure?: any;
  applicationStarted?: any;
  controllers?: any[];
}

export async function launchServer(config: AppConfig = {}) {
  const {
          rootPath = __dirname,
          staticPath,
          configure,
          applicationStarted,
          controllers = [],
        } = config,
        appSettings = require(`${rootPath}/appsettings.json`) || {},
        portNumber: number = process.env.PORT || appSettings.port || config.port || 5000,
        server: Application = express();

  server.use(express.urlencoded({ extended: true }))
        .use(express.json())
        .use('/', express.static(`${rootPath}/wwwroot`));

  staticPath && Object.entries<string>(staticPath).forEach(entry => {
    server.use(`/${entry[0]}`, express.static(entry[1]));
  });

  controllers.forEach((ctrl: any) => {
    const { routePath = '', routes = [] } = ctrl;

    routes.forEach((route: any) => {
      const { httpMethod = 'get', routeName = '', action = () => {} } = route,
            path = `/${routePath}${routePath ? '/' : ''}${routeName}`;

      console.log(httpMethod.toUpperCase().padEnd(8, ' '), `${path}`);
      (<any>server)[httpMethod](path, async(req: Request, res: Response) => {
        try {
          const { params, query, body } = req,
                result = await action.bind(ctrl)({ ...params, ...query, body });

          res.send(result);
        } catch (err) {
          logError(err.message);
          res.status(500).send({ error: err.message });
        }
      });
    });
  });

  configure && await configure();

  server.listen(portNumber, (err: any) => {
    if (err) {
      logError('Unable to start Express.', err);
    } else {
      logInfo(`Content root path: ${rootPath}`);
      logInfo(`Now listening on: http://localhost:${portNumber}`);
      logInfo('Application started. Press Ctrl+C to shut down.');
      applicationStarted && applicationStarted();
    }
  });
}

export const route = (routePath: string = '') => (Controller: any) => {
  const controller = new Controller();
  controller.routePath = routePath;
  return controller;
}

function request(httpMethod: string, routeName: string = '', controller: any, actionName: string, action: any) {
  if (!routeName && 'index' !== actionName) routeName = actionName;
  !controller.routes && (controller.routes = []);
  controller.routes.push({ httpMethod, routeName, action });
}

export const httpGet = (routeName = '') => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  request('get', routeName, target, propertyKey, descriptor.value);
}

export const httpPost = (routeName = '') => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  request('post', routeName, target, propertyKey, descriptor.value);
}

export const httpPut = (routeName = '') => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  request('put', routeName, target, propertyKey, descriptor.value);
}

export const httpPatch = (routeName = '') => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  request('patch', routeName, target, propertyKey, descriptor.value);
}

export const httpDelete = (routeName = '') => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  request('delete', routeName, target, propertyKey, descriptor.value);
}

export * from './file';