import type {RequireAtLeastOne, MergeExclusive} from 'type-fest';

/**
@deprecated
*/
type LegacyOptions = RequireAtLeastOne<{
	minimum: number;
	maximum: number;
}>;

export type Options = MergeExclusive<RequireAtLeastOne<{
	min: number;
	max: number;
}>, LegacyOptions>;

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
```
*/
export default function mathClamp(number: number, options: Options): number;
