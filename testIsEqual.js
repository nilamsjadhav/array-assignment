const isEqual = require("./isEqual.js").isEqual;
const assert = require('./assert.js').assert;

const testIsEqual = function (list1, list2, expected, description) {
  const actual = isEqual(list1, list2);
  assert(actual, expected, description);
};

const isEqualTests = function () {
  testIsEqual([1], [1], true, 'Arrays with similar element');
  testIsEqual([1], [2], false, 'Arrays with dissimilar element');
  testIsEqual([1, 2], [1, 2], true, 'Arrays with two similar elements');
  testIsEqual([2, 2], [1, 2], false, 'Arrays with two dissimilar elements');
  testIsEqual([1, 2, 3], [1, 2], false, 'Arrays with two different lengths');
  testIsEqual([[1]], [[1]], true, 'Two dimensional array with a element');
  testIsEqual([[1, 2]], [[1, 2]], true, 'Two dimensional array with a element');
  testIsEqual([[1, 2]], [[3, 2]], false, 'Two dimensional array with a element');
  testIsEqual([[1,2], 2, [3]],[[1,2], 2, [3]], true, 'Two dimensional array with a element');
};

isEqualTests();
