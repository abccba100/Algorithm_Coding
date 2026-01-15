const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const A = input[0]
const B = input[1]
const C = input[2]

if (B >= C) {
  console.log(-1);
} else {
  const soon = C - B;
  const boon = Math.floor(A / soon) + 1;
  console.log(boon);
}