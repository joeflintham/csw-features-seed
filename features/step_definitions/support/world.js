'use strict';

var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var Key = webdriver.Key;
var until = webdriver.until;
var helpers = require('./test-helpers');
var ActionSequence = webdriver.ActionSequence;
var promise = webdriver.promise;

function World() {
    this.driver = helpers.getDriver();
    this.By = By;
    this.Key = Key;
    this.until = until;
    this.ActionSequence = ActionSequence;
    this.promise = promise;
}

module.exports = function exportWorld() {
    this.World = World;
    this.quit = function quit() {
        this.driver.quit();
    };
};
