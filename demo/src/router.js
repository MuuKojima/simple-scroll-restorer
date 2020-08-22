import {Router as VdnRouter} from '@vaadin/router';

import ListPage from './list';
import DetailPage from './detail';

class Router {
  init({outlet}) {
    this.router = new VdnRouter(outlet);
    this.router.setRoutes([
      {path: `/`, component: ListPage.is},
      {path: `/:id`, component: DetailPage.is}
    ]);
  }
}

export default new Router();
