const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const commands = input.slice(1).map(line => line.split(" "));

let arr = [];
let f = 0;

for(let i=0;i<commands.length;i++){
  switch (commands[i][0]){
    case "push":
      arr.push(commands[i][1])
      break;
    case "pop":
      if(arr.length - f === 0){
        console.log(-1)
      }
      else{
        console.log(arr[f]);
        f++;
      }
      break;
    case "size":
      console.log(arr.length - f);
      break;
    case "empty":
      if(arr.length - f === 0){
        console.log(1);
      }
      else{
        console.log(0);
      }
      break;
    case "front":
      if(arr.length - f === 0){
        console.log(-1)
      }
      else{
        console.log(arr[f]);
      }
      break;
    case "back":
      if(arr.length - f === 0){
        console.log(-1)
      }
      else{
        console.log(arr[arr.length-1]);
      }
      break;
  }
}