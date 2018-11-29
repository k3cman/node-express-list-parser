const fs = require("fs");

var arr1 = [32214, 32204, 32215];

var allArrays = [arr1, arr1];

function allPossibleCases(arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    var result = [];
    var allCasesOfRest = allPossibleCases(arr.slice(1)); // recur with the rest of array
    for (var c in allCasesOfRest) {
      for (var i = 0; i < arr[0].length; i++) {
        if ((arr[0][i] === allCasesOfRest[c]) === false) {
          result.push(
            "INSERT INTO enmon.item_suggestions(item_id,suggested_item_id) VALUES(" +
              arr[0][i] +
              "," +
              allCasesOfRest[c] +
              ");"
          );
        }
      }
    }
    return result;
  }
}
var r = allPossibleCases(allArrays);
const stri = r.toString();
const rrr = stri.replace(/,INSERT/g, "INSERT");
const rr = rrr.replace(/\'/g, "");

fs.writeFile("test.txt", rr, err => {
  if (err) throw err;
  console.log("Saved!");
});
