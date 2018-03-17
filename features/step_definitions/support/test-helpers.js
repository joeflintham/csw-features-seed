'use strict';
const dotenv = require('dotenv');

const webdriver = require('selenium-webdriver');
const { setDefaultTimeout } = require('cucumber');

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const BROWSER = process.env.BROWSER || 'chrome';
// const BROWSER_WIDTH = parseInt(process.env.BROWSER_WIDTH, 10) || 1280;
// const BROWSER_HEIGHT = parseInt(process.env.BROWSER_HEIGHT, 10) || 800;
const SCRIPT_TIMEOUT = parseInt(process.env.SCRIPT_TIMEOUT, 10) || 5000;


webdriver.promise.USE_PROMISE_MANAGER = false;

setDefaultTimeout(SCRIPT_TIMEOUT);

const urls = {
	home: HOST,
};

module.exports = {
	driver: null,

	getURL: (key) => urls[key],

	getHost: () => HOST,

	destroyDriver: function() {
		this.driver.quit();
	},

	getDriver: async function() {
		const driver = await new webdriver.Builder()
			.withCapabilities({ browserName: BROWSER, loglevel: 'verbose' })
			.build();

		// driver.manage().window().setSize(BROWSER_WIDTH, BROWSER_HEIGHT);
		return driver;
	},

	getTimeout: function() {
		return SCRIPT_TIMEOUT;
	},
};
