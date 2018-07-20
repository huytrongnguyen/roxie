import express from 'express';
import ControllerCollection from './controller';

export const Application = Startup => {
  const { argv } = process,
          content = argv[argv.indexOf('--content') + 1],
          port = process.env.PORT || argv[argv.indexOf('--port') + 1],
          app = express(),
          controllerCollection = new ControllerCollection(app);

  app.listen(port, (err) => {
    err && console.log('App failed to start caused by %s', err.message);
    !err && console.log('App is listening at port %s', port);
  });

  const startup = new Startup();
  startup.configure(controllerCollection);
}