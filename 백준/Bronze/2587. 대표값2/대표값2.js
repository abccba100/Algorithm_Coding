const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = input.split('\n').map(Number)

let arrSum = 0;

for(e of input){
  arrSum += e
}

console.log(arrSum / input.length)

input.sort();

if(input.length % 2 === 0){
  const N = input.length / 2

  const sum = input[N] + input[N - 1];

  console.log(sum / 2)
}
else{
  const N = Math.floor(input.length / 2)
  
  console.log(input[N])
}