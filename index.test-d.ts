import {expectType, expectError} from 'tsd';
import mathClamp from './index.js';

expectType<number>(mathClamp(1, {min: 2, max: 4}));
expectType<number>(mathClamp(1, {min: 2}));
expectType<number>(mathClamp(5, {max: 4}));
expectType<number>(mathClamp(1, {minimum: 2}));
expectType<number>(mathClamp(5, {maximum: 4}));
expectType<number>(mathClamp(1, {minimum: 2, maximum: 4}));
expectType<bigint>(mathClamp(3n, {min: 2n, max: 4n}));
expectError(mathClamp(1, {min: 2, maximum: 4}));
expectError(mathClamp(1, {min: 2, max: 4, maximum: 4}));
expectError(mathClamp(1, {minimum: 2, min: 2, max: 4, maximum: 4}));
expectError(mathClamp(1, {}));
