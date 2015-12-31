import test from 'ava';
import fn from './';

test(t => {
	t.is(fn(1, 1, 1), 1);
	t.is(fn(2, 1, 3), 2);
	t.is(fn(1, 2, 4), 2);
	t.is(fn(5, 1, 4), 4);
});
