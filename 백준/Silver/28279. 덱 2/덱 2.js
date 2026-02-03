const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = input.split('\n').map(e => e.split(' ').map(Number))

const N = input[0][0];
const commands = input.slice(1)

let dq = []
let res = []
let head = 0
let tail = 0
let temp
let isNumber = false

const isEmpty = () => {
  if(dq.length === 0 || head > tail) return 1
  return 0
}

for(let i=0;i<N;i++){
  const command = commands[i][0] 
  const x = commands[i][1]

  switch (command) {
    case 1:
      if(head === tail && !isNumber){
        dq[head] = x
        isNumber = true
      }
      else{
        head--
        dq[head] = x
      }
      break;
  
    case 2:
      if(head === tail && !isNumber){
        dq[tail] = x
        isNumber = true
      }
      else{
        tail++
        dq[tail] = x
      }
      break;

    case 3: 
      if(isEmpty()) res.push(-1)
      else{
        temp = dq[head]
        head++
        res.push(temp)
      }
      break;

    case 4:
      if(isEmpty()) res.push(-1)
      else{
        temp = dq[tail]
        tail--
        res.push(temp)
      }
      break;

    case 5:
      if(isEmpty()) res.push(0)
      else res.push(tail - head + 1)
      break;

    case 6:
      if(isEmpty()) res.push(1)
      else res.push(0)
      break;

    case 7:
      if(isEmpty()) res.push(-1)
      else{
        res.push(dq[head])
      }
      break;

    case 8:
      if(isEmpty()) res.push(-1)
      else{
        res.push(dq[tail])
      }
      break;

    default:
      console.log(dq)
      break;
  }
}

console.log(res.join('\n'))