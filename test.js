'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.assert(fn(1, 1, 1) === 1);
	t.assert(fn(2, 1, 3) === 2);
	t.assert(fn(1, 2, 4) === 2);
	t.assert(fn(5, 1, 4) === 4);
	t.end();
});
