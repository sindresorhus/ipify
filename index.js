const IPIFY_ENDPOINT_IPV4 = 'https://api.ipify.org';
const IPIFY_ENDPOINT_IPV6 = 'https://api6.ipify.org';

export default async function ipify({useIPv6 = true, endpoint} = {}) {
	endpoint ??= useIPv6 ? IPIFY_ENDPOINT_IPV6 : IPIFY_ENDPOINT_IPV4;

	if (Array.isArray(endpoint)) {
		if (endpoint.length === 0) {
			throw new TypeError('Endpoint array cannot be empty');
		}

		return Promise.any(endpoint.map(async url => {
			const response = await fetch(url);
			return response.text();
		}));
	}

	const response = await fetch(endpoint);
	return response.text();
}
