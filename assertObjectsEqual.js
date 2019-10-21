///Insert eqArrays Function

const eqArrays = function(arrayA, arrayB) {
  
  if(arrayA.length !== arrayB.length) {
   return false; 
  }
   for(var i = 0; i < arrayA.length; i++) {
   if(arrayA[i] !== arrayB[i]) {
    return false;
  }
 }
 return true; 
};

// Insert eqObjects

const eqObjects = function(object1, object2) {
 if (Object.keys(object1).length !== Object.keys(object2).length) {
   return false;
 }

 for(const key in object1) {
   if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) {
     console.log(object1[key]);
     console.log(object2[key]);
     if (eqArrays(object1[key], object2[key]) === false) { //eqArrays called here.
       return false;
     }
   } else if (object1[key] !== object2[key]) {
     return false;
   }
 }
return true;
};
  
// Function implementation

const asertObjectsEqual = function(actual, expected) {
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

