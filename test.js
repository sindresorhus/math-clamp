import test from 'ava';
import mathClamp from '.';

test('main', t => {
	t.is(mathClamp(1, 1, 1), 1);
	t.is(mathClamp(2, 1, 3), 2);
	t.is(mathClamp(1, 2, 4), 2);
	t.is(mathClamp(5, 1, 4), 4);
});
