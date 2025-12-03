const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = Number(input);

const len = String(input).length;

let res = input * len;

for(let i=0;i<len - 1;i++){
  res -= Number("9" + "9".repeat(i));
}

console.log(res)