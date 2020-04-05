import Route from '@ember/routing/route';
import ENV from 'uptime/config/environment';

export default class IndexRoute extends Route {
    async model() {
        const response = await fetch(ENV.CHECKS_API);
        const parsed = await response.json();
        return parsed;
      }
}
