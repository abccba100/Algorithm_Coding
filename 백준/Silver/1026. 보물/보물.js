const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let A = input[1].split(' ').map(Number);
let B = input[2].split(' ').map(Number);

let S = 0

A.sort((a, b) => b - a)
B.sort((a, b) => a - b)

for(let i=0;i<N;i++){
  S += (A[i] * B[i])
}

console.log(S)