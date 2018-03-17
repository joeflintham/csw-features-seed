'use strict';
const webdriver = require('selenium-webdriver');
const { After, Before } = require('cucumber');
const helpers = require('./test-helpers');

Before(async function() {
    this.driver = await helpers.getDriver();
});

After(function() {
    this.driver.quit();
});
