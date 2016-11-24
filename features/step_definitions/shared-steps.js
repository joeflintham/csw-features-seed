'use strict';
/* eslint func-names: 0 */
/* eslint new-cap: 0 */
/* eslint max-len: 0 */
/* eslint no-undef: 0 */
var chai = require('chai');
var expect = chai.expect;
var helpers = require('./support/test-helpers');
var pages = require('./support/pages');

var steps = function () {
    this.Given(/^I am on the '(.*)' page$/, function (page, callback) {
        var self = this;
        this.driver.get(pages.getUrl(page))
            .then(function () {
                callback();
            }).catch(function (error) {
                callback(error);
            });
    });

    this.Then(/^I should see the '(.*)' page$/, function (page, callback) {
        this.driver.getTitle()
            .then(function (title) {
                expect(title).to.equal(pages.getTitle(page));
                callback();
            });
	  });
};

module.exports = steps;
