'use strict';
const helpers = require('./test-helpers');

const urls = {
	home: helpers.getHost(),
};

const titles = {
	home: '',
};

module.exports = {
	getUrl: (page) => urls[page],
	getTitle: (page) => titles[page],
};
