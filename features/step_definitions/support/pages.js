'use strict';
const dotenv = require('dotenv');
dotenv.config();

var helpers = require('./test-helpers');

var urls = {
    home: helpers.getHost()
};

var titles = {
    home: '<MY_HOME_PAGE>'
};

module.exports = {
    getUrl: (page) => urls[page],
    getTitle: (page) => titles[page]
};
