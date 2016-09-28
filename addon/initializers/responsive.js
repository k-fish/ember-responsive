import Ember from 'ember';
import config from '../config/environment';

const { deprecate } = Ember;
const AUTO_INJECTION_DEPRECATION_MESSAGE = '[ember-responsive] Future versions of ember-responsive will no longer inject the media service automatically. Instead you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';

/**
 * Ember responsive initializer,
 *
 * Injects the media service in all controllers route components and views
 */
export function initialize(application) {
  const { emberResponsiveDefaults: { injectionFactories }} = config;
  const shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

  deprecate(AUTO_INJECTION_DEPRECATION_MESSAGE, shouldShowDeprecation, {
    id: 'ember-responsive.deprecate-auto-injection'
  });

  injectionFactories.forEach((target) => {
    application.inject(factory, 'media', 'service:responsive');
  });
}

export default {
  name: 'responsive',
  initialize: initialize
};
