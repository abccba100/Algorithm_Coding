const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let bigNum = BigInt(input[0]) + BigInt(input[1])
console.log(String(bigNum));