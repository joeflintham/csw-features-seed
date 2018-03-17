'use strict';

const chai = require('chai');
const expect = chai.expect;
const pages = require('./support/pages');

const { Given: given, Then: then } = require('cucumber');

given(/^I am on the '(.*)' page$/, async function(page) {
	await this.driver.get(pages.getUrl(page));
});

then(/^I should see the '(.*)' page$/, async function(page) {
	const title = await this.driver.getTitle();

	return expect(title).to.equal(pages.getTitle(page));
});
