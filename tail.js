const assertEqual = require('./assertEqual');

// Implement function to return the tail 
// Declare the empty array
// Array.slice will remove 1st element & return new tail array

  const words = ["Yo Yo", "Lighthouse", "Labs"];
  const tail = function (array) {
  return array.slice(1);

  };

module.exports = tail;