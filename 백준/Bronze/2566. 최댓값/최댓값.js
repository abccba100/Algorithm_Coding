const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = input.split('\n').map(e => e.split(' ').map(Number));

let maxArr = []
let max;
let i, j;

for(e of input){
  maxArr.push(Math.max(...e))
}
max = Math.max(...maxArr);

i = maxArr.indexOf(max);
j = input[i].indexOf(max);

console.log(max)
console.log(i + 1, j + 1)