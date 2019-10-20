// Insert eqAssays & assertEqual Function

const eqArrays = function(arrayA, arrayB) {
  
  // var a = ([1, 2, 3], [1, 2, 3]); 
  //var b = ([1, 2, 3], [3, 2, 1]);
   
  // if the length is not equal 
   if(arrayA.length !== arrayB.length) {
    return false; 
   }
   // comparing each element of the array 
    for(var i = 0; i < arrayA.length; i++) {
    if(arrayA[i] !== arrayB[i]) {
     return false;
   }
  }
  return true; 
};

const assertArraysEqual = function(arrayA, arrayB) {
  // print this one to the console if 'actual' is same as expected
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅Assertion Passed: ${arrayA} === ${arrayB}`);
  // print this one to the console if 'actual' is not same as expected.=
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

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