const fs = require('fs');
const inpu = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(inpu[0]);

const input = inpu.slice(1, 1 + n).map(line => line.split(' '));

let stack = []
let res = []

for(let i=0;i<input.length;i++){
  if(input[i][0]=="push_back"){
    push(input[i][1])
  }

  else  if(input[i][0]=="push_front"){
    unshift(input[i][1])
  }

  else if(input[i][0]=="pop_back"){
    pop()
  }

  else if(input[i][0]=="pop_front"){
    shift()
  }

  else if(input[i][0]=="size"){
    res.push(stack.length)
  }

  else if(input[i][0]=="empty"){
    if(stack.length == 0){
      res.push(1)
    }
    else{
      res.push(0)
    }
  }

  else if(input[i][0]=="back"){
    if(stack.length == 0){
      res.push(-1)
    }
    else{
      res.push(stack[stack.length-1])
    }
  }

  else if(input[i][0]=="front"){  
    if(stack.length == 0){
      res.push(-1)
    }
    else{
      res.push(stack[0])
    }
  }
}

function push(num) {
  stack.push(num)
}

function unshift(num) {
  stack.unshift(num)
}

function pop() {
  if(stack.length == 0){
    res.push(-1)
  }
  else{
    res.push(stack[stack.length-1])
    stack.pop()
  }
}

function shift() {
  if(stack.length == 0){
    res.push(-1)
  }
  else{
    res.push(stack[0])
    stack.shift()
  }
}

for(e of res){
  console.log(e)
}