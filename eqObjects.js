// Insert assertEqual Function

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
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

// Tests
const ab = {a: "28", b: "32"};
const ba = {b: "32", a: "28"};
console.log(assertEqual(eqObjects(ab, ba))); 

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc))); 

let objects1 = {
  key1: "monday",
  key2: "tuesday",
  key3: "wednesday"
};

let objects2 = {
  key1: "monday",
  key2: "tuesday",
  key3: "wednesday"
};