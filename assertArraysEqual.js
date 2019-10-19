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


// Implement a function for equal array comparison

function AseqArrays(_arr1, _arr2) {
  if (_arr1.length !== _arr2.length) 
  return false;

  for (var i = 0, e = _arr1.length; i < e; i++) {
    if (_arr1[i] !== _arr2[i] {
    return false;
    }
  }
  return true;
}

