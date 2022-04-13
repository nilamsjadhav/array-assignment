const areBothArrays = function (element1, element2) {
  const isArray = Array.isArray;
  return isArray(element1) && isArray(element2);
};

const isEqual = function (element1, element2) {
  const queue1 = [];
  const queue2 = [];
 
  if (element1.length !== element2.length) {
    return false;
  }

  let array1 = element1;
  let array2 = element2;

  queue1.push(array1[0]);
  queue2.push(array2[0]);

  while (queue1.length > 0) {
    
    for (let index = 0; index < array1.length; index++) {
      if (areBothArrays(array1[index], array2[index])) {
        queue1.push(array1[index]);
        queue2.push(array2[index]);
      }
      else if(array1[index] !== array2[index]){
        return false;
      }
    }
    array1 = queue1.shift();
    array2 = queue2.shift();
  }
  return true;
};

exports.isEqual = isEqual;