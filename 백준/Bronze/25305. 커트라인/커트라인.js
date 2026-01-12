const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, k] = input[0].split(' ');
let arr = input[1].split(' ');

arr.sort((a, b) => b - a)

console.log(arr[k - 1])