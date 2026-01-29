const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = input.split('\n').map(e => e.split(' ').map(Number))

let i = 0;
let N, M;
let res = []

while(1){
  N = input[i][0];
  M = input[i][1];

  if(N === M) break;

  if(M % N === 0 && M / N > 1){
    res.push('factor')
  }
  else if(N % M === 0 && N / M > 1){
    res.push('multiple')
  }
  else{
    res.push('neither')
  }
  i++
}

console.log(res.join('\n'))