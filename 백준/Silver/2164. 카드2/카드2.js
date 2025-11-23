const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

input = Number(input);
let arr= []
let temp;
let front = 0;

for(let i=0;i<input;i++){
  arr[i] = i+1;
}

while(true){
  if(arr.length - front === 1) break;

  front++;
  temp = arr[front];
  front++;
  arr.push(temp);
}

console.log(arr[front]);