import test from 'ava';
import isIp from 'is-ip';
import m from '.';

test(async t => {
	t.true(isIp(await m()));
	t.true(isIp(await m('https://api.ipify.org')));
});
