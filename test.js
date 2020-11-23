import test from 'ava';
import isIp from 'is-ip';
import ipify from '.';

// GitHub Actions doesn't support IPv6: https://github.com/actions/virtual-environments/issues/668
if (!process.env.CI) {
	test('main', async t => {
		t.true(isIp(await ipify()));
	});
}

test('useIPv6:false', async t => {
	t.true(isIp.v4(await ipify({useIPv6: false})));
});

test('endpoint:custom', async t => {
	t.true(isIp.v4(await ipify({endpoint: 'https://api.ipify.org'})));
});
