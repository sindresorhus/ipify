#!/usr/bin/env node
'use strict';
var meow = require('meow');
var ipify = require('./');

meow({
	help: [
		'Example',
		'  $ ipify',
		'  82.142.31.236'
	].join('\n')
});

ipify(function (err, ip) {
	if (err) {
		throw err;
	}

	console.log(ip);
});
