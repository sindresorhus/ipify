'use strict';
var got = require('got');

module.exports = got.bind(null, 'http://api.ipify.org');
