const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = input.map((e) => e.split(' '))

let sum = 0;
let res = 0;
let scoreSum = 0;

input.forEach(e => {
  let rankScroe = 0;
  if(e[2] === 'A+') rankScroe = 4.5
  else if(e[2] === 'A0') rankScroe = 4.0
  else if(e[2] === 'B+') rankScroe = 3.5
  else if(e[2] === 'B0') rankScroe = 3.0
  else if(e[2] === 'C+') rankScroe = 2.5
  else if(e[2] === 'C0') rankScroe = 2.0
  else if(e[2] === 'D+') rankScroe = 1.5
  else if(e[2] === 'D0') rankScroe = 1.0
  else if(e[2] === 'F') rankScroe = 0;
  else{
    e[1] = 0;
  }
  scoreSum += Number(e[1]);
  sum += Number(e[1]) * rankScroe
});

res = sum / scoreSum

console.log(res.toFixed(6))