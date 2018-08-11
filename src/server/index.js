import express from 'express';
import Services from './services';

export const RoxieServer = Application => {
  const server = express(),
        services = new Services(server),
        app = new Application();

  app.configureServices && app.configureServices(services);

  server.use(express.json());

  const port = process.env.PORT || services.appSettings.port || 3000;

  server.listen(port, (err) => {
    err && console.log('App failed to start caused by %s', err.message);
    !err && console.log('App is listening at port %s', port);
  });
}