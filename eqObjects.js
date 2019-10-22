const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Insert eqObjects

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for(const key in object1) {
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) {
      console.log(object1[key]);
      console.log(object2[key]);
      if (eqArrays(object1[key], object2[key]) === false) { //eqArrays called here.
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
return true;
};

// if (object1[key] !== object2[key] === false) {
//   return false // False/ False will continue iterating through, check the whole 
// }
// // Tests
const ab = {a: "11", b: "21"};
const ba = {b: "21", a: "11"};
assertEqual(eqObjects(ab, ba), true); 

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); 


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true)

const cd2 = { c: "1", d: ["2", 3, 4]}
assertEqual(eqObjects(cd, cd2), false)


// const lm = { l: "11", m: "22" };
// const ml = { m: "22", l: "11" };
// eqObjects(ab, ba); // => true

// const def = { d: "11", e: "22", f: "33" };
// eqObjects(de, def); // => false

module.exports = eqObjects;