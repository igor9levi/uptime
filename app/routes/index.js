import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        const response = await fetch('/api/checks.json');
        const parsed = await response.json();
        return parsed;
      }
}
