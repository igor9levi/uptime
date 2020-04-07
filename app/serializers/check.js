import JSONSerializer from '@ember-data/serializer/json';

export default class CheckSerializer extends JSONSerializer {
  normalizeResponse(store, primaryModelClass, payload) {
    payload.forEach(item => {
        item.id = item.token;
    });

    return super.normalizeResponse(...arguments);
  }
}