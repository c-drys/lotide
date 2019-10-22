
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//Implement middle 

    const middle = function (array) {

      let newArray = [];
    
    if (array.length === 1 || array.length === 2) {
      return newArray;
    } else if (array.length % 2 === 0) {
      var evenArray = (array.length -1) / 2;
      var below = Math.floor(evenArray);
      var above = Math.ceil(evenArray);
      // console.log(evenArray);
      // console.log(below);
      // console.log(above);
      // console.log(`The indexes are ${above} and ${below}`);
      // console.log(The elements are ${array[below]} and ${array[above]}`);
        newArray.push(array[below]);
        newArray.push(array[above]);
        return newArray;
    
    } else { 
      var oddArray = (array.length - 1) / 2;
      // console.log(`Index is, ${oddArray}`);
      // console.log(`Element is :, ${array[oddArray]}`);
      newArray.push(array[oddArray])
      return newArray
    }
    };
 
    module.exports = middle;