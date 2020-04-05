import Route from '@ember/routing/route';

export default class DetailsRoute extends Route {
    async afterModel (model) {
        const response = await fetch('https://gist.githubusercontent.com/Rio517/c523873cd4495456a88cac8f1860461b/raw/81667cb58db57cae093092748225c3a98a43ee1e/check-description.json');
        const parsed = await response.json();
        model.description = parsed[model.token];
    }
}
