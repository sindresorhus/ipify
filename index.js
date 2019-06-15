'use strict';
const got = require('got');

const IPIFY_ENDPOINT_IPV4 = 'https://api.ipify.org';
const IPIFY_ENDPOINT_IPV6 = 'https://api6.ipify.org';

module.exports = async ({useIPv6 = true, endpoint} = {}) => {
	if (endpoint === undefined) {
		endpoint = useIPv6 ? IPIFY_ENDPOINT_IPV6 : IPIFY_ENDPOINT_IPV4;
	}

	const {body} = await got(endpoint);
	return body;
};
