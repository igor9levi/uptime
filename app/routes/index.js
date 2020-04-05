import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
      const records = this.store.findAll('check');
      return records;
    }
}
