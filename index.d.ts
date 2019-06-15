declare namespace ipify {
	interface Options {
		/**
		Use IPv6 api endpoint. Setting `endpoint` option will override this.

		@default true
		*/
		readonly useIPv6?: boolean;

		/**
		Custom API endpoint.

		@default 'https://api6.ipify.org'
		*/
		readonly endpoint?: string;
	}
}

/**
Get your public IP address.

@returns An IP address.

@example
```
import ipify = require('ipify');

(async () => {
	console.log(await ipify());
	//=> '2001:0db8:85a3:0000:0000:8a2e:0370:7334' (if you have ipv6 address, same as next otherwise)
	console.log(await ipify({useIPv6: false});
	//=> '82.142.31.236'
})();
```
*/
declare function ipify(options?: ipify.Options): Promise<string>;

export = ipify;
