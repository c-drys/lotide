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

// Implement a function eqArrays

function eqArrays(_arr1, _arr2) {

  if (!Array.isArray(_arr1) || ! Array.isArray(_arr2) || _arr1.length !== _arr2.length)
    return false;

    console.log("im confused", eqArrays)

};

const words = ["ground", "control", "to", "major", "tom"];

// Start off with an empty array and return that array

// const map = function(array, callback) {
//   console.log('array: ', array);
//   console.log('callback: ', callback);


//   const results = [];
//   return results;
// }
// console.log(map())


const printFirst = function(word) {
  return word.charAt(0)
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}
assertEqual(console.log(map(words, printFirst)))


