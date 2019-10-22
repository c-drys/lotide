const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

// loop through the source Array
// loop through the items to remove array
// if source === remove break it
// create new array array.push 
// return (push) if not equal

const without = function (source, remove) {
  let newArray = []
  
  for (i = 0; i < source.length; i++) {
    for (x = 0; x < remove.length; x++){
      if (source.length[i]=== remove.length[x]) {
      break
  }

if (remove.length - 1 === x) {
    newArray.push[array[i]];
    }
  }
  }
  return newArray;
};

  
  const words = ["hello", "world", "lighthouse"];
  without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
