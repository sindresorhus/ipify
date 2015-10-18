'use strict';
var test = require('ava');
var isIp = require('is-ip');
var publicIp = require('./');

test(function (t) {
	publicIp(function (err, ip) {
		t.ifError(err);
		t.true(isIp(ip));
		t.end();
	});
});
