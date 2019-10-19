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

// Implement function to return the head 
// Declare the empty array
// Array.shift will remove & return 1st element 

const arr = ([])
let head = arr.shift()
  console.log(head); //undefined as predicted


// // Test assertions
assertEqual(arr.shift([5,6,7]), 5);
assertEqual(arr.shift(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(arr.shift(["Mon", "Tue", "Wed", "Thurs"]), "Mon")