const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
const M = Number(input[2])
let arrN = input[1].split(' ').map(Number)
arrN = new Set(arrN)
const arrM = input[3].split(' ').map(Number)
let res = []

for(e of arrM){
  if(arrN.has(e)){
    res.push(1)
  }
  else{
    res.push(0)
  }
}

console.log(res.join('\n'))