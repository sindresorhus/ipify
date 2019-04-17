'use strict';
const got = require('got');

module.exports = async endpoint => {
	const response = await got(endpoint || 'https://api.ipify.org');
	return response.body;
};
