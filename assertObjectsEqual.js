// eqObjects

/const eqObjects = function(object1, object2) {
  if (object1.keys(object1).length !== object1.keys(object2).length){
    return false;
  }

  for (key of object1.keys(object1)){
    if (array.isArray(object1[key]) && array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    
    } else { 
      if (object1[key] !== object2[key] {
      }
        return false;
      }
    }
  }
  return true;
  }
  
  / Function implementation

const asertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (actual === true) {
    console.log('✅✅✅Assertion Passed; ${actual} === ${expected}');
  } else {
    console.log('🛑🛑🛑Assertion Failed: ${actual} !== ${expected}');
  } 
};

