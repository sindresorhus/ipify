# ipify [![Build Status](https://travis-ci.org/sindresorhus/ipify.svg?branch=master)](https://travis-ci.org/sindresorhus/ipify)

> Get your public IP address - fast

Using the [ipify](http://www.ipify.org) API.


## Usage

```sh
$ npm install --save ipify
```

```js
var ipify = require('ipify');

ipify(function (err, ip) {
	console.log(ip);
	//=> 82.142.31.236
});
```


## CLI

```sh
$ npm install --global ipify
```

```sh
$ ipify --help

  Example
    ipify
    82.142.31.236
```


## Related

See [internal-ip](https://github.com/sindresorhus/internal-ip) to get your internal IP.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
