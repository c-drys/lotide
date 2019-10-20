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

// loop through the source Array
// loop through the items to remove array
// if source === remove break it
// create new array array.push 
// return (push) if not equal

const without = function (source, remove) {
  let newArray = []
  
  for (i = 0; i < source.length; i++) {
    for (x = 0; x < remove.length; x++){
      if (source.length[i]=== remove.length[x]) {
      break
  }

if (remove.length - 1 === x) {
    newArray.push[array[i]];
    }
  }
  }
  return newArray;
};

  
  const words = ["hello", "world", "lighthouse"];
  without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);

