const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);

let arr = input.slice(1).map(e => e.split(' ').map(Number))

let arr1 = arr.slice(0, N);
let arr2 = arr.slice(N, arr.length)

let res = []

for(let i=0;i<N;i++){
  res.push([]) 
}

for(let i=0;i<N;i++){
  for(let j=0;j<M;j++){
    res[i][j] = arr1[i][j] + arr2[i][j]
  }
}

console.log(res.join('\n').replaceAll(',', ' '))