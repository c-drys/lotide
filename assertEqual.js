// FUNCTION IMPLEMENTATION
// Insert assertEqual Function

const assertEqual = function(actual, expected) {
  // print this one to the console if 'actual' is same as expected
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  // print this one to the console if 'actual' is not same as expected.=
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


// const assertArraysEqual = function(arrayA, arrayB) {
//   // print this one to the console if 'actual' is same as expected
//   if (eqArrays(arrayA, arrayB)) {
//     console.log(`✅✅✅Assertion Passed: ${arrayA} === ${arrayB}`);
//   // print this one to the console if 'actual' is not same as expected.=
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${arrayA} !== ${arrayB}`);
//   }
// };

// TEST CODE

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
