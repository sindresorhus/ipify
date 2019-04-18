'use strict';
const got = require('got');

module.exports = async options => {
	options = {
		endpoint: 'https://api.ipify.org',
		...options
	};

	const {body} = await got(options.endpoint);
	return body;
};
