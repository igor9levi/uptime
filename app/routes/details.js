import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class DetailsRoute extends Route {

  async model (params) {
    const check = await this.store.findAll('check', { backgroundReload: false });
    let model = check.find(item => item.id === params.id);

    const { descriptions } = await this.store.queryRecord('detail', {});
    model.description = descriptions[params.id];

    return model;
  }

  @action
    error (error) {
    console.log('Error handling details route', error); // Redirect to error page
    return false;
  }
}
