const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const q = [];
let head = 0;
let out = [];

for (let i = 1; i <= N; i++) {
  const [cmd, val] = input[i].split(' ');

  if (cmd === 'push') {
    q.push(Number(val));
  } 
  else if (cmd === 'pop') {
    if (head === q.length) out.push(-1);
    else out.push(q[head++]);
  } 
  else if (cmd === 'size') {
    out.push(q.length - head);
  } 
  else if (cmd === 'empty') {
    out.push(head === q.length ? 1 : 0);
  } 
  else if (cmd === 'front') {
    if (head === q.length) out.push(-1);
    else out.push(q[head]);
  } 
  else if (cmd === 'back') {
    if (head === q.length) out.push(-1);
    else out.push(q[q.length - 1]);
  }
}

console.log(out.join('\n'));
