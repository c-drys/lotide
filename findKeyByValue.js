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


// const findKeyByValue = function(obj, value) {
//   for (var i = 0; i < obj.length; i++) {
//     if(i[key] === i[value]){
//       return key;
//     }  else {
//         return true;
//     }
//   }
//}

// function findKeyByValue(object, value) {
//   for (var i = 0; i < object.key; i++)
//   if (object[i] !== value[i])
//   return true;
// }

 
function findKeyByValue(object, value) {
  let result = undefined
  for (let key in object) { 
    if (object[key] === value) {
      result = key
    }
  } 
  return result 
}


// loop through the object
// return the key if contains the given value
// if given value return undefined




const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


  assertEqual(
    findKeyByValue(bestTVShowsByGenre, "The Wire"),
    "drama"
  )

assertEqual(
  findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
  undefined
);