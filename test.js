import test from 'ava';
import isIp from 'is-ip';
import m from './';

test.cb(t => {
	m((err, ip) => {
		t.ifError(err);
		t.true(isIp(ip));
		t.end();
	});
});
