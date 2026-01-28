const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const x = Number(input);

let l = 2
let next = 7;

if(x === 1){
  console.log(1);
  return;
}

while(x > next){
  next = next + 6 * l
  l++;
}

console.log(l)