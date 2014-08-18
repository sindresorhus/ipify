#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var ipify = require('./');
var argv = process.argv.slice(2);

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Example',
		'    ipify',
		'    82.142.31.236'
	].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

ipify(function (err, ip) {
	if (err) {
		throw err;
	}

	console.log(ip);
});
