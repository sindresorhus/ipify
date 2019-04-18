import {expectType} from 'tsd';
import ipify = require('.');

const options: ipify.Options = {};
expectType<Promise<string>>(ipify());
expectType<Promise<string>>(ipify({endpoint: 'https://example.com'}));
