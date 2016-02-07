'use strict';
var baseConfig = require('./karma.config.base');

module.exports = function(config) {
  config.set(Object.assign(baseConfig, {
    reporters: ['teamcity'],
    autoWatch: false,
    singleRun: true
  }));
};
