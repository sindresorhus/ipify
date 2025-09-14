export interface Options {
	/**
	Use the IPv6 API endpoint. The IPv6 endpoint will return an IPv6 address if available, IPv4 address otherwise.

	Setting the `endpoint` option will override this.

	@default true

	@example
	```
	import ipify from 'ipify';

	console.log(await ipify({useIPv6: false}));
	//=> '82.142.31.236'
	```
	*/
	readonly useIPv6?: boolean;

	/**
	Custom API endpoint.

	Can be a single endpoint or an array of endpoints. When multiple endpoints are provided, they will be tried concurrently and the first successful response will be returned.

	@default 'https://api6.ipify.org'

	@example
	```
	import ipify from 'ipify';

	// Single endpoint
	console.log(await ipify({endpoint: 'https://api.ipify.org'}));
	//=> '82.142.31.236'

	// Multiple endpoints for resilience
	console.log(await ipify({
		endpoint: [
			'https://api.ipify.org',
			'https://ipify.example.org'
		]
	}));
	//=> '82.142.31.236'
	```
	*/
	readonly endpoint?: string | readonly string[];
}

/**
Get your public IP address.

@returns An IP address.

@example
```
import ipify from 'ipify';

console.log(await ipify());
//=> '2001:0db8:85a3:0000:0000:8a2e:0370:7334'
```
*/
export default function ipify(options?: Options): Promise<string>;
