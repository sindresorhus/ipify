import process from 'node:process';
import test from 'ava';
import isIp from 'is-ip';
import ipify from './index.js';

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

test('endpoint:array', async t => {
	const result = await ipify({
		endpoint: [
			'https://api.ipify.org',
			'https://api6.ipify.org',
		],
	});
	t.true(isIp(result));
});

test('endpoint:empty array throws', async t => {
	await t.throwsAsync(
		ipify({endpoint: []}),
		{instanceOf: TypeError, message: 'Endpoint array cannot be empty'},
	);
});

test('endpoint:single-item array', async t => {
	const result = await ipify({
		endpoint: ['https://api.ipify.org'],
	});
	t.true(isIp.v4(result));
});

test('endpoint overrides useIPv6', async t => {
	const result = await ipify({
		useIPv6: true,
		endpoint: 'https://api.ipify.org',
	});
	t.true(isIp.v4(result));
});

test('endpoint:array with duplicates', async t => {
	const result = await ipify({
		endpoint: [
			'https://api.ipify.org',
			'https://api.ipify.org',
		],
	});
	t.true(isIp.v4(result));
});
