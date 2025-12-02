const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input.slice(1).map(line => line.split(""));

let res = [];
let d = 0;
let bool = false;

for(let i=0;i<N;i++){
  res[i] = [];
}

for(let i=0;i<N;i++){
  bool = false;
  d = 0;
  for(let j=0;j<M;j++){
    if(arr[i][j] === "c"){
      res[i][j] = 0;
      bool = true;
      d = 0;
      continue;
    }
    else if(bool === false){
      res[i][j] = -1;
      continue;
    }

    d++;
    res[i][j] = d;
  }
}

for(let i=0;i<N;i++){
  res[i] = res[i].join(" ")
}
res = res.join("\n");
console.log(res);