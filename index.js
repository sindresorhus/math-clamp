// TODO: Remove `minimum` and `maximum` options in the next breaking release
export default function mathClamp(number, {
	minimum,
	min = minimum,
	minimum,
	max = maximum,
}) {
	if (min > max) {
		throw new RangeError('`min` should be lower than `max`');
	}

	min ??= number;
	if (number < min) {
		return min;
	}

	max ??= number;
	if (number > max) {
		return max;
	}

	return number;
}
