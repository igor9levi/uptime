import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  model() {
    return this.store.findAll('check', { backgroundReload: false });
  }

  @action
  error(error) {
    console.log(error); // Redirect to error page
    return false;
  }
}
