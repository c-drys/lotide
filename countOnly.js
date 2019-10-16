
const assertEqual = function(actual, expected) {
  // print this one to the console if 'actual' is same as expected
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  // print this one to the console if 'actual' is not same as expected.=
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

  // allItems: an array of strings that we need to look through
  // itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  // loop over all the items in the array and print them to the console.
  for (const item of allItems) {
    console.log(item);
    // inside the loop, 
    
    // set a property with that string key to:
    if (results[item]) {
      // the value that was already there with 1 added to it.
      console.log("item was in results", results);
      results[item] += 1;
    } else {
      console.log("item was not found", results);
      // (or 1 if nothing there)
      results[item] = 1;
  
    }
  }

  console.log(results);
  return results;
};

 const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"

];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);