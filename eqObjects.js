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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
};

const ab = {a: "28", b: "32"};
const ba = {b: "32", a: "28"};
console.log(assertEqual(eqObjects(ab, ba))); 

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc))); 