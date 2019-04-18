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

(async => {
	console.log(await ipify());
	//=> '82.142.31.236'
})();
```


## API

### ipify([options])

Returns a `Promise` for the IP address.

#### options

Type: `object`

##### endpoint

Type: `string`<br>
Default: `'https://api.ipify.org'`

Custom API endpoint.


## Related

- [ipify-cli](https://github.com/sindresorhus/ipify-cli) - CLI for this module
- [internal-ip](https://github.com/sindresorhus/internal-ip) - Get your internal IPv4 or IPv6 address


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
