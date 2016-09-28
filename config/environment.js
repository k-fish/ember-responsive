'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    emberResponsiveDefaults: {
      injectionFactories: [
        'route',
        'component',
        'controller',
        'view'
      ]
    }
  };
};
