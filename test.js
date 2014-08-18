'use strict';
var test = require('ava');
var publicIp = require('./');

test(function (t) {
	publicIp(function (err, ip) {
		t.assert(!err, err);
		t.assert(ip.length >= 13);
		t.assert(ip.length <= 50);
		t.end();
	});
});
