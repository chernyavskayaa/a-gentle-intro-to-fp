const square = (x) => x ** 2;
const addTwo = (x) => x + 2;

const result1 = square(addTwo(2)); // 16
const result2 = addTwo(square(2)); // 6

const compose =
  (...fns) =>
  (x) =>
    [...fns].reverse().reduce((acc, fn) => fn(acc), x);

const composedFn = compose(square, addTwo);
const result3 = composedFn(2); // 16

const pipe =
  (...fns) =>
  (x) =>
    [...fns].reduce((acc, fn) => fn(acc), x);

const pipedFn = pipe(square, addTwo);
const result4 = pipedFn(2); // 6
