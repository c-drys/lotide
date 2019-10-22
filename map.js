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
console.log(map(words, printFirst))

module.exports = map;



