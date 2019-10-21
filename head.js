const assertEqual = require('./assertEqual');

// Implement function to return the head 
// Declare the empty array
// Array.shift will remove & return 1st element 

// const arr = ([])
// let head = arr.shift()
//   console.log(head); //undefined as predicted

const head = function (array) {
  return array[0]; // index 0 - head 
};

// array.shift not as clean
// head is a function 

module.exports = head;