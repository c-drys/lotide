const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// is this an array?
// if yes, return flattened x
// if no, return just x

const flatten = function(array) {

  var newArray = []; 

  for (let i = 0; i < array.length; i++) {
    
    if (Array.isArray(array[i])) {
    for (let x = 0; x < array[i].length; x++)  {
    console.log(newArray);
    newArray.push(array[i][x]);}
    console.log(newArray);
    } else {
      newArray.push(array[i]);
    }
    console.log(newArray);
  }
  return newArray;
};


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); 
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 22, 3, 4, 55, 6]);


// newArray [2][0] -- retrieves 3 ==> [1, 2, [3, 4], 5, [6]]

module.exports = flatten;
