import { RoxieServer } from '~/server';

@RoxieServer
export default class Startup {
  configureServices(services) {
    services.useStaticFiles('./docs');
  }
}