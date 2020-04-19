'use strict';

module.exports = function (number, min, max) {
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
};
