const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = input.split('\n').slice(1).map(e => e.split(' ').map(Number))

let stack = []
let res = []

for(let i=0;i<input.length;i++){
  if(input[i][0] === 1){
    stack.push(input[i][1])
  }
  else if(input[i][0] === 2){
    if(stack.length){
      res.push(stack[stack.length - 1])
      stack.pop()
    } else{
      res.push(-1)
    }
  }
  else if(input[i][0] === 3){
    res.push(stack.length)
  }
  else if(input[i][0] === 4){
    if(stack.length){
      res.push(0)
    } else{
      res.push(1)
    }
  }
  else if(input[i][0] === 5){
    if(stack.length){
      res.push(stack[stack.length - 1])
    } else{
      res.push(-1)
    }
  }
}

console.log(res.join('\n'))