export default function mathClamp(number, {min, minimum, max, maximum}) {
	// TODO: Remove `minimum` and `maximum` options in the next breaking release
	min ??= minimum;
	max ??= maximum;

	if (min > max) {
		throw new RangeError('`min` should be lower than `max`');
	}

	if (number < min) {
		return min;
	}

	if (number > max) {
		return max;
	}

	return number;
}
