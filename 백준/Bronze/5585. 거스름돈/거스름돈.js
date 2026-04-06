const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = 1000 - Number(input)

let nowNumber = input
let N = 0;
let coins = [500, 100, 50, 10, 5, 1]

for(let e of coins){
  let n = Math.floor(nowNumber / e)

  nowNumber -= n * e
  N += n
}

console.log(N)