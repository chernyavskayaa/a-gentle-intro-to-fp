// Without currying
const multiply = (a, b, c) => a * b * c;
const result = multiply(2, 3, 4);

// With currying
const curriedMultiply = (a) => (b) => (c) => a * b * c;
const curriedResult = curriedMultiply(2)(3)(4);

// Simple curry
const curry = (fn) => (a) => (b) => fn(a, b);

// Real curry
function curry(fn) {
  return function curried(...params) {
    //If we've collected all parameters
    if (params.length == fn.length) {
      return fn.apply(this, [...params]); //we call the original function
    }
    return function (...params2) {
      //we return another partial function
      if (params2.length == 0) {
        params2.push(null); //for optional parameters
      }
      return curried.apply(this, params.concat(params2));
    };
  };
}

const data = [
  {
    first_name: 'John',
    last_name: 'Doe',
    age: 38,
  },
  {
    first_name: 'Elizabeth',
    last_name: 'Beth',
    age: 40,
  },
  {
    first_name: 'Jane',
    last_name: 'Doe',
    age: 25,
  },
  {
    first_name: 'Steven',
    last_name: 'Boe',
    age: 30,
  },
];

function filter(data, attribute, value, operator) {
  switch (operator) {
    case 'gt':
      return data.filter((d) => d[attribute] > value);
    case 'lt':
      return data.filter((d) => d[attribute] < value);
    default:
      return data.filter((d) => d[attribute] == value);
  }
}

const curriedFilter = curry(filter);
const filterByAge = curriedFilter(data)('age');
const olderThan30 = filterByAge(30)('gt');

const filterByName = cfilter(data)('first_name');
