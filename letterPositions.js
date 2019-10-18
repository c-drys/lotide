// Insert assertEqual Function
const assertEqual = function (actual, expected) {
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


const eqArrays = function (a, b) {

  // var a = ([1, 2, 3], [1, 2, 3]); 
  //var b = ([1, 2, 3], [3, 2, 1]);

  // if the length is not equal 
  if (a.length !== b.length) {
    return false;
  } else {
    // comparing each element of the array 
    for (var i = 0; i < a.length; i++) {
      if (a[i] != b[i]) {
        return false;
      }
    }
      
    return true;
  }
}


const letterPositions = function (string) {
  let freq = {}
  for (var i = 0; i < string.length; i++) {
    var character = string.charAt(i);
    if (freq[character]) {
      freq[character].push(i);
    } else {
      if (!!character.replace(/\s/, '')) {
        freq[character] = [i];
      }
    }
  }
  return freq;

}


console.log(letterPositions("lighthouse in the house"))
assertEqual(eqArrays(letterPositions("hello").e, [1]));


// const results = {};
// logic to update results here
// return results; 


// Define Object Structure To Return