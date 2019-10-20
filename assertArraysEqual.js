// Implement a function eqArrays

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
// Insert assertEqual Function
const assertArraysEqual = function(arrayA, arrayB) {
  // print this one to the console if 'actual' is same as expected
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅Assertion Passed: ${arrayA} === ${arrayB}`);
  // print this one to the console if 'actual' is not same as expected.=
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);