const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
  
// Function implementation

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  // if console.log (inspect then object, it will call )

  if (eqObjects(actual, expected)) {
    console.log('✅✅✅Assertion Passed; ${inspect(actual)} === ${inspect(expected)}');
    // print this one to the console if 'actual' is same as expected
  } else {
    console.log('🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}');
    // print this one to the console if 'actual' is not same as expected.=
  } 
};

// inspects accepts an object and coverts to a readable String

module.exports = assertObjectsEqual;
