const maxLength = function (array1, array2) {
  return Math.max(array1.length, array2.length);
};

const areBothArrays = function (element1, element2) {
  return Array.isArray(element1) && Array.isArray(element2);
};

const areArraysEqual = function (array1, array2) {
  if (!areBothArrays(array1, array2)) {
    return false; 
  } 

  const length = maxLength(array1, array2);
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

const includes = function (set, element) {
  for (let index = 0; index < set.length; index++) {
    if (areArraysEqual(element, set[index])) {
      return true;
    }
    if (element === set[index]) {
      return true;
    }
  }
  return false;
};

const isAbsentEarlier = function (index, set) {
  return !includes(set.slice(0, index), set[index]);
};

const groupSimilarElements = function (position, set) {
  const setOfSimilarElements = [];

  for (let index = position; index < set.length; index++) {
    if (areArraysEqual(set[index], set[position])) {
      setOfSimilarElements.push(set[position]);
    }
    else if (set[position] === set[index]) {
      setOfSimilarElements.push(set[index]);
    }
  }
  return setOfSimilarElements;
};

const groupSimilarElementSets = function (set) {
  const setsOfSimilarElements = [];

  for (let index = 0; index < set.length; index++) {
    if (isAbsentEarlier(index, set)) {
      setsOfSimilarElements.push(groupSimilarElements(index, set));
    }
  }
  return setsOfSimilarElements;
};

console.log(groupSimilarElementSets([1]));
console.log(groupSimilarElementSets([1, 2]));
console.log(groupSimilarElementSets([1, 2, 1]));
console.log(groupSimilarElementSets([1, 2, 3, 1, 2, 4]));
console.log(groupSimilarElementSets([[1, 1], 2, [1, 1]]));
console.log(groupSimilarElementSets([[1, 1], 2, [1, 1], [1, 1], 2, [2, 1], 0]));
