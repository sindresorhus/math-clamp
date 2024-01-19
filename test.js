import test from 'ava';
import mathClamp from './index.js';

test('main', t => {
	t.is(mathClamp(1, {minimum: 1, maximum: 1}), 1);
	t.is(mathClamp(1, {min: 1, max: 1}), 1);

	t.is(mathClamp(2, {minimum: 1, maximum: 3}), 2);
	t.is(mathClamp(2, {min: 1, max: 3}), 2);

	t.is(mathClamp(1, {minimum: 2, maximum: 4}), 2);
	t.is(mathClamp(1, {min: 2, max: 4}), 2);

	t.is(mathClamp(5, {minimum: 1, maximum: 4}), 4);
	t.is(mathClamp(5, {min: 1, max: 4}), 4);

	t.is(mathClamp(5, {minimum: 1}), 5);
	t.is(mathClamp(5, {min: 1}), 5);

	t.is(mathClamp(1, {minimum: 1}), 1);
	t.is(mathClamp(1, {min: 1}), 1);

	t.is(mathClamp(0, {minimum: 1}), 1);
	t.is(mathClamp(0, {min: 1}), 1);

	t.is(mathClamp(5, {maximum: 1}), 1);
	t.is(mathClamp(5, {max: 1}), 1);

	t.is(mathClamp(1, {maximum: 1}), 1);
	t.is(mathClamp(1, {max: 1}), 1);

	t.is(mathClamp(0, {maximum: 1}), 0);
	t.is(mathClamp(0, {max: 1}), 0);

	t.is(mathClamp(2, {max: 1, maximum: 3}), 1);
	t.is(mathClamp(1, {min: 3, minimum: 2}), 3);
});
