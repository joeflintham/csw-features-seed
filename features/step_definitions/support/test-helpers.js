'use strict';
const dotenv = require('dotenv');
dotenv.config();

var webdriver = require('selenium-webdriver');

var HOST = process.env.HOST || 'http://localhost';
var BROWSER = process.env.BROWSER || 'chrome';
var BROWSER_WIDTH = parseInt(process.env.BROWSER_WIDTH, 10) || 1280;
var BROWSER_HEIGHT = parseInt(process.env.BROWSER_HEIGHT, 10) || 800;
var SCRIPT_TIMEOUT = parseInt(process.env.SCRIPT_TIMEOUT, 10) || 5000;

var urls = {
    home: HOST
};

module.exports = {
    driver: null,

    getURL: (key) => urls[key],

    getHost: () => HOST,

    createDriver: function () {
        this.driver = new webdriver.Builder()
            .withCapabilities({browserName: BROWSER, logLevel: 'verbose'})
            .build();

        this.driver.manage().window().setSize(BROWSER_WIDTH, BROWSER_HEIGHT);
        var p = webdriver.promise.defer();
        p.fulfill();
        return p;
    },

    destroyDriver: function () {
        this.driver.quit();
    },

    getDriver: function () {
        return this.driver;
    },

    getTimeout: function () {
        return SCRIPT_TIMEOUT;
    }
};
