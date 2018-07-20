import { Route, Get } from '~/server/route';

@Route()
export default class HomeController {
  // @Get()
  index(props) {
    console.log(props);
    return 'index';
  }

  // @Get('/about')
  about(props) {
    console.log(props);
    return 'about';
  }
}