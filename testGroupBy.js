const groupBy = require("./groupBy.js").groupBy;
const assert = require('./assert.js').assert;

const testGroupBy=function(set, expected, description){
  const actual = groupBy(set);
  assert(actual, expected, description);
}

const groupByTests = function () {  
  testGroupBy([1],[[1]],'Array with single element');
  testGroupBy([1, 2], [[1],[2]], 'Array with two elements');
  testGroupBy([1, 2, 1], [[1,1],[2]], 'Array with two repeated elements');
  testGroupBy([1, 2, 3, 1, 2, 4],[[1,1], [2,2],[3],[4]], 'Array with more than one repeated element');
  testGroupBy([[1, 1], 2, [1, 1]], [[[1, 1], [1, 1]], [2]], 'Two dimensional array with one repeated element');
  testGroupBy([[1, 1], 2, [1, 1], [1, 1], 2, [2, 1], 0], [[[1, 1], [1, 1], [1, 1]], [2, 2], [[2,1]],[0]], 'Two dimensional array with more than one repeated elements');
  testGroupBy([[1, [1]], [1, [1]], 2], [[[1,[1]], [1, [1]]], [2]], 'Nested array');
}

groupByTests();