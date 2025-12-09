const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = Number(input)

for(let i=input;i>0;i--){
  console.log(" ".repeat(input-i) + "*".repeat(i * 2 - 1))
}
for(let i=1;i<input;i++){
  console.log(" ".repeat(input-i-1) + "*".repeat(i * 2 + 1))
}