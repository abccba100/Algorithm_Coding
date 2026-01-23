const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = input.split('\n');

const N = Number(input[0]);
input = input.slice(1).map(e => e.split(' ').map(e => Number(e)))

let paper = []
let zero = []
let res = 0

for(let i=0;i<100;i++){
  zero.push(0)
}

for(let i=0;i<100;i++){
  paper.push(zero.slice())
}

for(let i=0;i<N;i++){
  let x = input[i][0]
  let y = input[i][1]

  for(let j=y;j<y+10;j++){
    for(let k=x;k<x+10;k++){
      paper[j][k] = 1;
    }
  }
}

paper.forEach(el => {
  res += el.filter(e => e === 1).length;
});

console.log(res)