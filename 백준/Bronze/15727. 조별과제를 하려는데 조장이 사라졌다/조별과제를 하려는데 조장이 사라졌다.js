const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = Number(input)

console.log(Math.ceil(input/5))