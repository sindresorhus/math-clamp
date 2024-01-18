export default function mathClamp(number, {min, minimum, max, maximum}) {
	if (minimum !== undefined) {
		if (min === undefined) {
			min = minimum;
		} else {
			throw new TypeError('`min` and `minimum` are mutually exclusive');
		}
	}

	if (maximum !== undefined) {
		if (max === undefined) {
			max = maximum;
		} else {
			throw new TypeError('`max` and `maximum` are mutually exclusive');
		}
	}

	if (min > max) {
		throw new RangeError('Minimum should be lower than maximum');
	}

	if (number < min) {
		return min;
	}

	if (number > max) {
		return max;
	}

	return number;
}
