const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for(let i=0;i<input.length;i++){
  let sum = 0;
  for(let j=0;j<input[i].length;j++){
    if(input[i][j]==='a' || input[i][j]==='e' || input[i][j]==='i' || input[i][j]==='o' || input[i][j]==='u') sum ++;
    if(input[i][j]==='A' || input[i][j]==='E' || input[i][j]==='I' || input[i][j]==='O' || input[i][j]==='U') sum ++;
    else if(input[i][j]==="#") return;
  }
  console.log(sum)
}