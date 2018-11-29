const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "...",
  user: "",
  password: "",
  database: ""
});

var arr1 = [23566, 23565, 23564];

var allArrays = [arr1, arr1];

function allPossibleCases(arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    var result = [];
    var allCasesOfRest = allPossibleCases(arr.slice(1)); // recur with the rest of array
    let rowCount = 0;
    for (var c in allCasesOfRest) {
      for (var i = 0; i < arr[0].length; i++) {
        if ((arr[0][i] === allCasesOfRest[c]) === false) {
          conn.query(
            `INSERT INTO enmon.item_suggestions(item_id,suggested_item_id) VALUES(${
              arr[0][i]
            },${allCasesOfRest[c]});`
          );
          console.log(arr[0][i], allCasesOfRest[c]);
          rowCount += +1;
          //   result.push(
          //     "INSERT INTO enmon.item_suggestions(item_id,suggested_item_id) VALUES(" +
          //       arr[0][i] +
          //       "," +
          //       allCasesOfRest[c] +
          //       ");"
          //   );
        }
      }
    }
    console.log("donne");
    console.log("Row COUNT  " + rowCount);
    return result;
  }
}
allPossibleCases(allArrays);
// const stri = r.toString();
// const rrr = stri.replace(/,INSERT/g, "INSERT");
// const rr = rrr.replace(/\'/g, "");

// console.log(rr);
