import Route from '@ember/routing/route';
import ENV from 'uptime/config/environment';

export default class DetailsRoute extends Route {
    async afterModel (model) {
        const response = await fetch(ENV.DESCRIPTION_API);
        const parsed = await response.json();
        model.description = parsed[model.token];
    }
}
