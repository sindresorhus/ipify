import {expectType} from 'tsd';
import ipify = require('.');

expectType<Promise<string>>(ipify());
expectType<Promise<string>>(ipify('https://example.com'));
