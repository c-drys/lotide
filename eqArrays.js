// Insert assertEqual Function


// Implement a function eqArrays

function eqArrays(_arr1, _arr2) {

  if (!Array.isArray(_arr1) || ! Array.isArray(_arr2) || _arr1.length !== _arr2.length)
    return false;

  var arr1 = _arr1.concat().sort();
  var arr2 = _arr2.concat().sort();

  for (var i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i])
          return false;

  }
  return true;
}



// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

