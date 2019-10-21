const assertEqual = require('./assertEqual');

// Implement a function eqArrays

function eqArrays(actual, expected) {

    // if the length is not equal 
    if(actual.length !== expected.length) {
      return false; 
     }
     // comparing each element of the array 
      for(var i = 0; i < actual.length; i++) {
      if(actual[i] !== expected[i]) {
       return false;
     }
    }
    return true; 
  };



module.exports = eqArrays;