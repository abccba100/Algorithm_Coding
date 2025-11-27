const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

if(input.length === 1){
  input += "0"
}

let res = 0;
let num1 = input[0];
let num2 = input[1]
let temp;
let newNum;


while(newNum != input){
  res++;
  temp = String(Number(num1) + Number(num2));
  temp = temp[temp.length - 1];
  num1 = num2;
  num2 = temp;
  newNum = num1 + num2;
}

console.log(res);