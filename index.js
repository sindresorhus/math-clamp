'use strict';
module.exports = function (x, min, max) {
	if (min > max) {
		throw new RangeError('`min` should be lower than `max`');
	}

	return x < min ? min : x > max ? max : x;
};
