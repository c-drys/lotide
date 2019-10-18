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

// Implement Map 

const array = [2, 5, 9];
  let double = array.map((num) => num * 2);

 assertEqual(console.log(double));
 assertEqual(console.log(array)); 
   

const hi = [
  {name: 'Adam', age: 21},
  {name: 'Ben', age: 4},
  {name: 'Carol', age: 77},
  {name: 'Devin', age: 30}];

let hiAges = hi.map((hi) => hi.age);

assertEqual(console.log(hiAges)); 



const days = ["mon", "tue", "wed", "thurs", "fri"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
  }
  return results;
}

const printThird = function(daysd) {
  return days.slice(0)
}
assertEqual(console.log(map(days, printThird)))
