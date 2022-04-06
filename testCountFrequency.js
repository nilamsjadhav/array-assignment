const countFrequency = require("./countFrequency.js").countFrequency;
const assert = require('./assert.js').assert;

const testCountFrequency = function (list, expected, description) {
  const actual = countFrequency(list);
  assert(actual, expected, description);
};

const countFrequencyTests = function () {
  testCountFrequency([], [], 'Empty array');
  testCountFrequency([1], [[1, 1]], 'Array with single element');
  testCountFrequency([1, 2], [[1, 1], [2, 1]], 'Array with two elements');
  testCountFrequency([1, 2, 1], [[1, 2], [2, 1]], 'Array with two repeated elements');
  testCountFrequency([1, 2, 3, 1, 2, 4], [[1, 2], [2, 2], [3, 1], [4, 1]], 'Array with more than one repeated element');
  testCountFrequency([[1, 1], 2, [1, 1]], [[[1, 1], 2], [2, 1]], 'Two dimensional array with one repeated element');
  testCountFrequency([[1, 1], 2, [1, 1], [1, 1], 2, [2, 1], 0], [[[1, 1], 3], [2, 2], [[2, 1], 1], [0, 1]], 'Two dimensional array with more than one repeated elements');
  testCountFrequency([[1, [1]], [1, [1]], 2], [[[1, [1]], 2], [2, 1]], 'Nested arrays');
};

countFrequencyTests();
