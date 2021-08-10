export default function mathClamp(number, {minimum, maximum}) {
	if (minimum > maximum) {
		throw new RangeError('`minimum` should be lower than `maximum`');
	}

	if (number < minimum) {
		return minimum;
	}

	if (number > maximum) {
		return maximum;
	}

	return number;
}
