import type {RequireAtLeastOne, MergeExclusive} from 'type-fest';

/**
@deprecated
*/
type LegacyOptions<ValueType> = RequireAtLeastOne<{
	minimum: ValueType;
	maximum: ValueType;
}>;

export type Options<ValueType = number> = MergeExclusive<RequireAtLeastOne<{
	min: ValueType;
	max: ValueType;
}>, LegacyOptions<ValueType>>;

/**
[Clamp](https://en.wikipedia.org/wiki/Clamping_(graphics)) a number

@example
```
import mathClamp from 'math-clamp';

mathClamp(1, {min: 2, max: 4});
//=> 2

mathClamp(1, {min: 2});
//=> 2

mathClamp(5, {max: 4});
//=> 4

mathClamp(3n, {max: 2n});
//=> 2n
```
*/
export default function mathClamp(number: bigint, options: Options<bigint>): bigint;
export default function mathClamp(number: number, options: Options): number;
