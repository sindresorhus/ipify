import {expectType} from 'tsd';
import ipify from './index.js';

expectType<Promise<string>>(ipify());
expectType<Promise<string>>(ipify({useIPv6: true})); // eslint-disable-line @typescript-eslint/naming-convention
expectType<Promise<string>>(ipify({useIPv6: false})); // eslint-disable-line @typescript-eslint/naming-convention
expectType<Promise<string>>(ipify({endpoint: 'https://example.com'}));
