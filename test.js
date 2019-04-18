import test from 'ava';
import isIp from 'is-ip';
import ipify from '.';

test('main', async t => {
	t.true(isIp(await ipify()));
	t.true(isIp(await ipify({endpoint: 'https://api.ipify.org'})));
});
