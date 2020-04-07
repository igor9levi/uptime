import JSONSerializer from '@ember-data/serializer/json';

export default class DetailSerializer extends JSONSerializer {
  normalizeQueryRecordResponse (store, primaryModelClass, payload, id, requestType) {
    const newPayload = {
      id: 1,
      descriptions: payload
    };
    return super.normalizeQueryRecordResponse(store, primaryModelClass, newPayload, id, requestType);
  }
}
