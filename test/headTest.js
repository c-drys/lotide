const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
    });

    it("returns '5' for ['5']", () => {
      assert.strictEqual(head(['5']), '5'); 
    });

    it("returns Hello for [Hello Lighthouse Labs]", () => {
      assert.strictEqual(head(['hello']), 'hello'); 
    });

    it("returns 'Mon' for ['Mon, Tue, Wed, Thurs']", () => {
      assert.strictEqual(head(['Mon']), 'Mon'); 
    });

});


// // // Test assertions - no longer required as we have mocha & chai
// // assertEqual(head([5,6,7]), 5);
// // assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// // assertEqual(head(["Mon", "Tue", "Wed", "Thurs"]), "Mon")