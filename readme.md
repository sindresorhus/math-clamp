# math-clamp

> [Clamp](https://en.wikipedia.org/wiki/Clamping_(graphics)) a number

## Install

```sh
npm install math-clamp
```

## Usage

```js
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

## API

### mathClamp(number, {min?, max?})

## Related

- [math-sum](https://github.com/sindresorhus/math-sum) - Sum numbers
- [math-average](https://github.com/sindresorhus/math-average) - Get the average of numbers
