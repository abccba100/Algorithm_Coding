const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = input.split('\n').map(Number);

const T = input[0]
const numbers = input.slice(1)

res = []

const Q = 25
const D = 10
const N = 5
const P = 1

let m = 0;
let q = 0
let d = 0
let n = 0
let p = 0

for(let i=0;i<T;i++){
  m = numbers[i];

  q = Math.floor(m / Q);
  m -= q * Q

  d = Math.floor(m / D);
  m -= d * D

  n = Math.floor(m / N);
  m -= n * N

  p = Math.floor(m / P);
  m -= p * P

  res.push(`${q} ${d} ${n} ${p}`)
}

console.log(res.join('\n'))