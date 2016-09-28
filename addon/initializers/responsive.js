import Ember from 'ember';

const { deprecate, getOwner } = Ember;
const AUTO_INJECTION_DEPRECATION_MESSAGE = '[ember-responsive] Future versions of ember-responsive will no longer inject the media service automatically. Instead you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';

/**
 * Ember responsive initializer,
 *
 * Injects the media service in all controllers route components and views
 */
export function initialize(application) {
  const config = getOwner(application).resolveRegistration('config:environment');
  const { emberResponsiveDefaults: { autoInject }} = config;
  const shouldShowDeprecation = autoInject;

  getOwner(application).lookup('service:responsive').init();

  deprecate(AUTO_INJECTION_DEPRECATION_MESSAGE, shouldShowDeprecation, {
    id: 'ember-responsive.deprecate-auto-injection'
  });

  if (autoInject) {
    application.inject('controller', 'media', 'service:media');
    application.inject('component', 'media', 'service:media');
    application.inject('route', 'media', 'service:media');
    application.inject('view', 'media', 'service:media');
  }
}

export default {
  name: 'responsive',
  initialize: initialize
};
