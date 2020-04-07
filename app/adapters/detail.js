import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class DetailAdapter extends JSONAPIAdapter {
  buildURL () {
    return 'https://gist.githubusercontent.com/Rio517/c523873cd4495456a88cac8f1860461b/raw/81667cb58db57cae093092748225c3a98a43ee1e/check-description.json';
  }
}
