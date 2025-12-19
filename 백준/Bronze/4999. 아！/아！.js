const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

if(input[0].length >= input[1].length){
  console.log('go');
} else{
  console.log('no');
}