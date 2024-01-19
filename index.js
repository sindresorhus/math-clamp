// TODO: Remove `minimum` and `maximum` options in the next breaking release
export default function mathClamp(number, {
	minimum = number,
	min = minimum,
	maximum = number,
	max = maximum,
}) {
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
