'use strict';
var helpers = require('./test-helpers');

var configure = function configure() {
    this.setDefaultTimeout(helpers.getTimeout());
};

module.exports = configure;
