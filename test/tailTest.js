const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
    });

    it("returns [32, 33] for [31, 32, 33]", () => {
      assert.deepEqual(tail([31, 32, 33]), [32, 33]);
      });

   it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
      assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
      });

});

// Note that for comparing arrays, Chai gives us assertDeepEqual, 
// because assertStrictEqual simply uses === to compare values, 
// which will not work for comparing objects and arrays.

// assertEqual(tail([5,6,7]), [6, 7]);
// assertEqual(tail(["Lighthouse", "Labs"]), ["Lighthouse" , "Labs"]); // => will always fail!

// // Cannot compare arrays with assertEqual

// // tail(words); // no need to capture the return value since we are not checking it
// // assertEqual(words.length, 3); // original array should still have 3 elements!