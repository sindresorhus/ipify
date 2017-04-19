'use strict';
const got = require('got');

module.exports = endpoint => got(endpoint || 'https://api.ipify.org').then(res => res.body);
