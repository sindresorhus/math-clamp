export default function mathClamp(number, {min, minimum, max, maximum}) {
	if (min !== undefined) {
		if (minimum === undefined) {
			minimum = min;
		} else {
			throw new TypeError('`min` and `minimum` are mutually exclusive');
		}
	}

	if (max !== undefined) {
		if (maximum === undefined) {
			maximum = max;
		} else {
			throw new TypeError('`max` and `maximum` are mutually exclusive');
		}
	}

	if (minimum > maximum) {
		throw new RangeError('Minimum should be lower than maximum');
	}

	if (number < minimum) {
		return minimum;
	}

	if (number > maximum) {
		return maximum;
	}

	return number;
}
