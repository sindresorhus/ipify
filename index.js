'use strict';
const got = require('got');

const IPIFY_ENDPOINT_IPV4 = 'https://api.ipify.org';
const IPIFY_ENDPOINT_IPV6 = 'https://api6.ipify.org';

module.exports = async options => {
	const useIPv6 = (options !== undefined && options.useIPv6 !== undefined) ? options.useIPv6 : true;
	const endpoint = (options !== undefined && options.endpoint !== undefined) ? options.endpoint : (useIPv6 ? IPIFY_ENDPOINT_IPV6 : IPIFY_ENDPOINT_IPV4);
	const {body} = await got(endpoint);
	return body;
};
