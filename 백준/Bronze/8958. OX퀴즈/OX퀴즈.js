const fs = require("fs");
let input = fs.readFileSync(0, "utf8").trim().split("\n");
input = input.slice(1);

let res = 0;
let hot = 0;

for(let i=0;i<input.length;i++){
  for(let j=0;j<input[i].length;j++){
    if(input[i][j] === "O"){
      hot++
      res += hot;
    }
    else{
      hot = 0;
    }
  }
  console.log(res);
  res = 0;
  hot = 0;
}