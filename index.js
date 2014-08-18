'use strict';
var got = require('got');

module.exports = function (cb) {
	got('http://api.ipify.org', function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, res);
	});
};
