const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const [a, b, c] = input;

if (a + b + c !== 180) {
  console.log('Error');
} else if (a === b && b === c) {
  console.log('Equilateral');
} else if (a === b || b === c || a === c) {
  console.log('Isosceles');
} else {
  console.log('Scalene');
}
