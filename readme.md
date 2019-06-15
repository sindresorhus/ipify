# ipify [![Build Status](https://travis-ci.org/sindresorhus/ipify.svg?branch=master)](https://travis-ci.org/sindresorhus/ipify)

> Get your public IP address

Using the [`ipify` API](https://www.ipify.org) or a [custom `ipify` instance](https://github.com/rdegges/ipify-api).


## Install

```
$ npm install ipify
```


## Usage

```js
const ipify = require('ipify');

(async () => {
	console.log(await ipify());
	//=> '2001:0db8:85a3:0000:0000:8a2e:0370:7334' (if you have ipv6 address, same as next otherwise)
	console.log(await ipify({useIPv6: false});
	//=> '82.142.31.236'
})();
```


## API

### ipify([options])

Returns a `Promise<string>` with an IP address.

#### options

Type: `object`

##### useIPv6

Type: `boolean`<br>
Default: `true`

Use IPv6 api endpoint. Setting `endpoint` option will override this.

##### endpoint

Type: `string`<br>
Default: `'https://api6.ipify.org'`

Custom API endpoint.


## Related

- [ipify-cli](https://github.com/sindresorhus/ipify-cli) - CLI for this module
- [internal-ip](https://github.com/sindresorhus/internal-ip) - Get your internal IPv4 or IPv6 address


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
