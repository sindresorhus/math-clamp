import test from 'ava';
import mathClamp from './index.js';

test('main', t => {
	t.is(mathClamp(1, {minimum: 1, maximum: 1}), 1);
	t.is(mathClamp(2, {minimum: 1, maximum: 3}), 2);
	t.is(mathClamp(1, {minimum: 2, maximum: 4}), 2);
	t.is(mathClamp(5, {minimum: 1, maximum: 4}), 4);
});
