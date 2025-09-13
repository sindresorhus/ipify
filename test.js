import {test} from 'node:test';
import assert from 'node:assert';
import process from 'node:process';
import {isIP, isIPv4} from 'is-ip';
import ipify from './index.js';

// GitHub Actions doesn't support IPv6: https://github.com/actions/virtual-environments/issues/668
if (!process.env.CI) {
	test('main', async () => {
		assert.ok(isIP(await ipify()));
	});
}

test('useIPv6:false', async () => {
	assert.ok(isIPv4(await ipify({useIPv6: false})));
});

test('endpoint:custom', async () => {
	assert.ok(isIPv4(await ipify({endpoint: 'https://api.ipify.org'})));
});

test('endpoint:array', async () => {
	const result = await ipify({
		endpoint: [
			'https://api.ipify.org',
			'https://api6.ipify.org',
		],
	});
	assert.ok(isIP(result));
});

test('endpoint:empty array throws', async () => {
	await assert.rejects(
		ipify({endpoint: []}),
		{name: 'TypeError', message: 'Endpoint array cannot be empty'},
	);
});

test('endpoint:single-item array', async () => {
	const result = await ipify({
		endpoint: ['https://api.ipify.org'],
	});
	assert.ok(isIPv4(result));
});

test('endpoint overrides useIPv6', async () => {
	const result = await ipify({
		useIPv6: true,
		endpoint: 'https://api.ipify.org',
	});
	assert.ok(isIPv4(result));
});

test('endpoint:array with duplicates', async () => {
	const result = await ipify({
		endpoint: [
			'https://api.ipify.org',
			'https://api.ipify.org',
		],
	});
	assert.ok(isIPv4(result));
});
