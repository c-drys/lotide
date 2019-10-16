// Insert assertEqual Function
const assertEqual = function(actual, expected) {
  // print this one to the console if 'actual' is same as expected
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  // print this one to the console if 'actual' is not same as expected.=
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement a function eqArrays which takes in two arrays and 
// returns true or false, based on a perfect match


const eqArrays = function(a, b) {
  
 // var a = ([1, 2, 3], [1, 2, 3]); 
 //var b = ([1, 2, 3], [3, 2, 1]);
  
 // if the length is not equal 
  if(a.length!=b.length) 
   return false; 
  else
  { 
  // comparing each element of the array 
   for(var i=0;i<a.length;i++) 
   if(a[i]!=b[i]) 
    return false; 
    return true; 
  }
}

assertEqual(      eqArrays(   [1, 2, 3], [1, 2, 3]     ), true     ); // => true


assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), false); // => false


eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false