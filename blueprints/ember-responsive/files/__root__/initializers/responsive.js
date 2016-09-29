import Ember from 'ember';

/**
 * Ember responsive initializer
 *
 * Supports auto injecting media service app-wide.
 * Generated by the ember-responsive addon.
 */
export function initialize() {
  const application = arguments[1] || arguments[0];

  application.inject('controller', 'media', 'service:media');
  application.inject('component', 'media', 'service:media');
  application.inject('route', 'media', 'service:media');
  application.inject('view', 'media', 'service:media');
}

export default {
  name: 'responsive',
  initialize
};
