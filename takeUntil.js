const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback){

  for (let i = 0; i < array.length; i++) {
    // iterate over the array
    if (callback(array[i])) {
      // callback will return true at [i] value
      // 
    return array.slice(0, i);
    // slice array from index o until poisition of condition met on index [i]
    }
  }
  return array; // original array returned if condition not met [false]
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(takeUntil(results1, x => x < 0), [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(takeUntil(results2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood']);

const data3 = ["Saturday", "Night", "Code", "Is", "Super", "F", "U", "N"];
const results3 = takeUntil(data3, x => x === 'F');
console.log(results3);
assertArraysEqual(takeUntil(results3, x => x === 'F'), ["Saturday", "Night", "Code", "Is", "Super"]);

const data4 = ["21", "22", "99", "44", "39", "?", "been", "to", "Vancouver"];
const results4 = takeUntil(data4, x => x === '?');
console.log(results4);
assertArraysEqual(takeUntil(results4, x => x === '?'), ['21', '22', '99', '44', '39']);

module.exports = takeUntil;
