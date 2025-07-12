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

// `BigInt(-0) = 0n` so we don't need to test BigInts
test.failing('+0 = -0', t => {
	t.is(mathClamp(-0, {max: -0}), 0);
	t.is(mathClamp(-0, {min: -0}), 0);

	t.is(mathClamp(-0, {max: 0}), 0);
	t.is(mathClamp(-0, {min: 0}), 0);

	t.is(mathClamp(1, {max: -0}), 0);
	t.is(mathClamp(-1, {min: -0}), 0);

	t.is(mathClamp(0, {min: -0, max: 0}), 0);
	t.is(mathClamp(0, {min: 0, max: -0}), 0);
	t.is(mathClamp(0, {min: -0, max: -0}), 0);

	t.is(mathClamp(-0, {min: -0, max: 0}), 0);
	t.is(mathClamp(-0, {min: 0, max: -0}), 0);
	t.is(mathClamp(-0, {min: -0, max: -0}), 0);
});

test('bigint', t => {
	t.is(mathClamp(1n, {minimum: 1n, maximum: 1n}), 1n);
	t.is(mathClamp(1n, {min: 1n, max: 1n}), 1n);

	t.is(mathClamp(2n, {minimum: 1n, maximum: 3n}), 2n);
	t.is(mathClamp(2n, {min: 1n, max: 3n}), 2n);

	t.is(mathClamp(1n, {minimum: 2n, maximum: 4n}), 2n);
	t.is(mathClamp(1n, {min: 2n, max: 4n}), 2n);

	t.is(mathClamp(5n, {minimum: 1n, maximum: 4n}), 4n);
	t.is(mathClamp(5n, {min: 1n, max: 4n}), 4n);

	t.is(mathClamp(5n, {minimum: 1n}), 5n);
	t.is(mathClamp(5n, {min: 1n}), 5n);

	t.is(mathClamp(1n, {minimum: 1n}), 1n);
	t.is(mathClamp(1n, {min: 1n}), 1n);

	t.is(mathClamp(0n, {minimum: 1n}), 1n);
	t.is(mathClamp(0n, {min: 1n}), 1n);

	t.is(mathClamp(5n, {maximum: 1n}), 1n);
	t.is(mathClamp(5n, {max: 1n}), 1n);

	t.is(mathClamp(1n, {maximum: 1n}), 1n);
	t.is(mathClamp(1n, {max: 1n}), 1n);

	t.is(mathClamp(0n, {maximum: 1n}), 0n);
	t.is(mathClamp(0n, {max: 1n}), 0n);

	t.is(mathClamp(2n, {max: 1n, maximum: 3n}), 1n);
	t.is(mathClamp(1n, {min: 3n, minimum: 2n}), 3n);
});
