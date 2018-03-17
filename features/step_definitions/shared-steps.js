'use strict';
/* eslint new-cap: 0 */

const chai = require('chai');
const expect = chai.expect;
const pages = require('./support/pages');

const { Given, Then } = require('cucumber');

Given(/^I am on the '(.*)' page$/, async function(page) {
	await this.driver.get(pages.getUrl(page));
});

Then(/^I should see the '(.*)' page$/, async function(page) {
	const title = await this.driver.getTitle();

	expect(title).to.equal(pages.getTitle(page));
});
