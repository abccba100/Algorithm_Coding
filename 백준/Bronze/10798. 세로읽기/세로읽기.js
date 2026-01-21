const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = input.split('\n').map(e => e.split(''));
const arrLens = input.map(e => e.length)
const maxLen = Math.max(...arrLens)

let res = []

for(let i=0;i<maxLen;i++){
  for(let j=0;j<input.length;j++){
    res.push(input[j][i])
  }
}

console.log(res.join(''))