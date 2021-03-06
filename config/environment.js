'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'uptime',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    
    // ENV.API_KEY = 'ro-7ySA8up3XmpR62WRSB64'; // public
    ENV.PATH_FOR_TYPE = '/api/checks.json';
    ENV.DESCRIPTION_API = 'https://gist.githubusercontent.com/Rio517/c523873cd4495456a88cac8f1860461b/raw/81667cb58db57cae093092748225c3a98a43ee1e/check-description.json';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.API_KEY = 'ro-pz3x1zy4ae63yhygraqe';
    ENV.CHECKS_HOST = 'https://updown.io';
    ENV.NAMESPACE = 'api';
    ENV.PATH_FOR_TYPE = 'checks';
    ENV.DESCRIPTION_API = 'https://gist.githubusercontent.com/Rio517/c523873cd4495456a88cac8f1860461b/raw/81667cb58db57cae093092748225c3a98a43ee1e/check-description.json';
  }

  return ENV;
};
