# ipify

> Get your public IP address

Using the [Ipify API](https://www.ipify.org) or a [custom Ipify instance](https://github.com/rdegges/ipify-api).

## Install

```sh
npm install ipify
```

## Usage

```js
import ipify from 'ipify';

console.log(await ipify());
//=> '2001:0db8:85a3:0000:0000:8a2e:0370:7334'
```

## API

### ipify(options?)

Returns a `Promise<string>` with an IP address.

#### options

Type: `object`

##### useIPv6

Type: `boolean`\
Default: `true`

Use the IPv6 API endpoint. The IPv6 endpoint will return an IPv6 address if available, IPv4 address otherwise.

Setting the `endpoint` option will override this.

```js
import ipify from 'ipify';

console.log(await ipify({useIPv6: false}));
//=> '82.142.31.236'
```

##### endpoint

Type: `string`\
Default: `'https://api6.ipify.org'`

Custom API endpoint.

## FAQ

### How is this different from [`public-ip`](https://github.com/sindresorhus/public-ip)?

This package only targets the Ipify service, while `public-ip` targets multiple services, is faster, and more resilient. Unless you run your own Ipify instance, you probably want `public-ip` instead.

## Related

- [ipify-cli](https://github.com/sindresorhus/ipify-cli) - CLI for this module
- [internal-ip](https://github.com/sindresorhus/internal-ip) - Get your internal IPv4 or IPv6 address
