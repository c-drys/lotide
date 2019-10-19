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


    const middle = function (array) {

      let newArray = [];
    
    if (array.length === 1 || array.length === 2) {
      return newArray;
    } else if (array.length % 2 === 0) {
      var evenArray = (array.length -1) / 2;
      var below = Math.floor(evenArray);
      var above = Math.ceil(evenArray);
      // console.log(evenArray);
      // console.log(below);
      // console.log(above);
      // console.log(`The indexes are ${above} and ${below}`);
      // console.log(The elements are ${array[below]} and ${array[above]}`);
        newArray.push(array[below]);
        newArray.push(array[above]);
        return newArray;
    
    } else { 
      var oddArray = (array.length - 1) / 2;
      // console.log(`Index is, ${oddArray}`);
      // console.log(`Element is :, ${array[oddArray]}`);
      newArray.push(array[oddArray])
      return newArray
    }
    };
    assertArraysEqual(middle([1]), []);
    assertArraysEqual(middle([1, 2]), []);
    assertArraysEqual(middle([1, 2, 3]), [2]);
    assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
    assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
    assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);