declare namespace ipify {
	interface Options {
		/**
		Custom API endpoint.

		@default 'https://api.ipify.org'
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

(async => {
	console.log(await ipify());
	//=> '82.142.31.236'
})();
```
*/
declare function ipify(options?: ipify.Options): Promise<string>;

export = ipify;
