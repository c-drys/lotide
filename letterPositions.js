const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

module.exports = letterPositions;
