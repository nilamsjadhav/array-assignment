const areBothArrays = function (element1, element2) {
  return Array.isArray(element1) && Array.isArray(element2);
};

const isEqual = function (element1, element2) {
  if (!areBothArrays(element1, element2)) {
    return element1 === element2;
  }

  if (element1.length !== element2.length) {
    return false;
  }

  for (let index = 0; index < element1.length; index++) {
    if (!isEqual(element1[index], element2[index])) {
      return false;
    }
  }
  return true;
};

const assert=function(actual, expected, description) {
  const status = isEqual(actual, expected) ? '✓' : 'x';
  console.log(status, description);
}

exports.assert = assert;
