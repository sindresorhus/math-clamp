export default function mathClamp(number, {min, minimum, max, maximum}) {
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
