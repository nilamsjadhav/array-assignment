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

const indexOf = function (set, element) {
  for (let index = 0; index < set.length; index++) {
    if (isEqual(element, set[index][0])) {
      return index;
    }
  }
  return -1;
};

const groupByIdentity = function (list) {
  const groupsOfSimilarElements = [];
  
  for (let index = 0; index < list.length; index++) {
    let position = indexOf(groupsOfSimilarElements, list[index]);
    if ( position === -1) {
      groupsOfSimilarElements.push([]);
      position = groupsOfSimilarElements.length - 1;
    }
    groupsOfSimilarElements[position].push(list[index]);
  }
  return groupsOfSimilarElements;
};

const countFrequency = function (set) {
  const groups = groupByIdentity(set);
  const frequencies = [];
  
  for (let index = 0; index < groups.length; index++) {
    frequencies.push([groups[index][0], groups[index].length]);
  }
  return frequencies;
};

exports.countFrequency = countFrequency;
