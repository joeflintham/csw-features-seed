'use strict';

const { After: after, Before: before } = require('cucumber');
const helpers = require('./test-helpers');

before(async function() {
	this.driver = await helpers.getDriver();
});

after(function() {
	this.driver.quit();
});
