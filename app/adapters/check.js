import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'uptime/config/environment';

export default class CheckAdapter extends JSONAPIAdapter {
  constructor () {
    super(...arguments);
    if (ENV.CHECKS_HOST) {
      this.host = ENV.CHECKS_HOST;
      this.namespace = ENV.NAMESPACE;
      this.headers = {
        'X-API-KEY': ENV.API_KEY,
      };
    }
  }

  pathForType() {
    return ENV.PATH_FOR_TYPE;
  }
}
