const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = input.split('\n').map(e => e.split(' ').map(Number))

let res = []

for(let i=0;i<input.length;i++){
  const A = input[i][0]
  const B = input[i][1]
  const C = input[i][2]
  const sortedArr = [...input[i]].sort((a, b) => a - b)
  if(A === 0 && B === 0 && C === 0) break;
  else if(A === B && B === C) res.push('Equilateral')
  else if(sortedArr[2] >= sortedArr[0] + sortedArr[1]) res.push('Invalid')
  else if(A === B || B === C || A === C) res.push('Isosceles')
  else res.push('Scalene')
}

console.log(res.join('\n'))