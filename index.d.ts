/**
Get your public IP address.

@param endpoint - Custom API endpoint. Default: `'https://api.ipify.org'`.
@returns The IP address.

@example
```
import ipify = require('ipify');

(async => {
	console.log(await ipify());
	//=> '82.142.31.236'
})();
```
*/
declare function ipify(endpoint?: string): Promise<string>;

export = ipify;
