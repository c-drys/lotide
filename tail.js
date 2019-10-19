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

// Implement function to return the tail 
// Declare the empty array
// Array.slice will remove 1st element & return new tail array

  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail = words.slice(1);
    console.log(tail)


  // console.log(assertEqual(tail([5,6,7]), [6, 7]));
  // console.log(assertEqual(tail(["Lighthouse", "Labs"]))); // => will always fail!


// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!