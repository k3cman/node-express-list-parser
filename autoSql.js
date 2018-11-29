const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "...",
  user: "",
  password: "",
  database: ""
});

var arr1 = [23566, 23565, 23564];

var allArrays = [arr1, arr1];

function cases(arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    var result = [];
    var restOfCases = cases(arr.slice(1)); // recur with the rest of array
    let rowCount = 0;
    for (var c in restOfCases) {
      for (var i = 0; i < arr[0].length; i++) {
        if ((arr[0][i] === restOfCases[c]) === false) {
          conn.query(
            `INSERT INTO item_suggestions(item_id,suggested_item_id) VALUES(${
              arr[0][i]
            },${restOfCases[c]});`
          );
          console.log(arr[0][i], restOfCases[c]);
          rowCount += +1;
        }
      }
    }
    console.log("donne");
    console.log("Row COUNT  " + rowCount);
    return result;
  }
}
cases(allArrays);
