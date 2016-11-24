'use strict';
var helpers = require('./test-helpers');

var hooks = function hooks() {
    this.registerHandler('BeforeFeature', function registerBeforeFeatureHandler(event, callback) {
        helpers.createDriver().then(function(){
            callback();
        });
    });

    this.registerHandler('AfterFeature', function registerAfterFeatureHandler(event, callback) {
        helpers.driver.quit().then(function q() {
            callback();
        });
    });
};

module.exports = hooks;
