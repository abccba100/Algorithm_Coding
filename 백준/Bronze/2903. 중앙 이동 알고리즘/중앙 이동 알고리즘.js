const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = Number(input);

let s = 1;
let res = 3;

while(input !== 1){
  res = res + res - 1
  input--
}
res = res * res

console.log(res)