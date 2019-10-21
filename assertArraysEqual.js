const eqArrays = require('./eqArrays');

// Insert assertArraysEqual Function
const assertArraysEqual = function(actual, expected) {
  // print this one to the console if 'actual' is same as expected
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  // print this one to the console if 'actual' is not same as expected.=
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;