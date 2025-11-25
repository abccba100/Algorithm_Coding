const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const arr = input.slice(1).map(line => line.split(" ").map(Number));

arr.sort((a, b) => a[0] - b[0] || a[1] - b[1])

for(e of arr){
  console.log(e[0], e[1])
}