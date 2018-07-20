import { Application } from '~/server';
import HomeController from './controllers/HomeController';

class Startup {
  // This method gets called by the runtime. Use this method to add services to the container.
  configureServices(services) {

  }

  // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
  configure(app) {
    app.addController(HomeController);
  }
}

Application(Startup);