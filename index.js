import got from 'got';

const IPIFY_ENDPOINT_IPV4 = 'https://api.ipify.org';
const IPIFY_ENDPOINT_IPV6 = 'https://api6.ipify.org';

export default async function ipify({useIPv6 = true, endpoint} = {}) {
	if (endpoint === undefined) {
		endpoint = useIPv6 ? IPIFY_ENDPOINT_IPV6 : IPIFY_ENDPOINT_IPV4;
	}

	const {body} = await got(endpoint);
	return body;
}
