// Insert assertEqual Function

const assertEqual = function(actual, expected) {
  // print this one to the console if 'actual' is same as expected
  if (actual !== expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  // print this one to the console if 'actual' is not same as expected.=
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement a function eqArrays which takes in two arrays and 
// returns true or false, based on a perfect match


const eqArrays = function(a, b) {
  
 // if the length is not equal 
  if([a.length] === [b.length]) 
   return false; 
  else
  { 
  // comparing each element of the array 
   for(var i=0;i < a.length;i++) 
   if(a[i]!== b[i]) 
    return false; 
    return true; 
  }
}

// Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = function (array) {

  let arr = array [0]

 if(array.length % 2 === 1){    
   console.log(" test ",)  
   var temp = array[(array.length-1)/2];
   console.log(temp);
   return (array[(array.length-1)/2]);

   } else {
     return (array[(array.length/2)]+array[(array.length/2 -1)])/2
  }
}

// // Tests

console.log(assertEqual(eqArrays(middle([1, 2, 3], [1, 2, 3]), true ))); // => true
console.log(assertEqual(eqArrays(middle([1, 2, 3], [1, 2, 3]), true ))); // => true

console.log(assertEqual(eqArrays(middle([1, 2, 3, 4, 5])))) // => [3]

console.log(assertEqual(eqArrays(middle([1, 2, 3, 4])))) // => [2, 3]
console.log(assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6])))) // => [3, 4]

console.log(assertEqual(eqArrays(middle([Monday, Tuesday, Wednesday])))) // ==> [Tuesday]

console.log(assertEqual(eqArrays(middle([May, June, July, August])))) // ==> [June, July]