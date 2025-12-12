const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = Number(input)

for(let i=1;i<=input;i++){
  console.log("*".repeat(i))
}
for(let i=input-1;i>0;i--){
  console.log("*".repeat(i))
}