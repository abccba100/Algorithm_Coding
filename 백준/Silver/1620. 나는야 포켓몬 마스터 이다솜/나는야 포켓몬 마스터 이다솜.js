const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = input.split('\n');
const [N, M] = input[0].split(' ').map(e => Number(e))

// map 써서 풀기

// 포켓몬 부분과 명령어 부분을 나누기
const encyclopedia = input.slice(1, N + 1)
const problems = input.slice(N + 1)
let res = []

// for문을 돌리면서 하나씩 key: 인덱스, value: 포켓몬 형태로 넣기
let map1 = new Map();
let map2 = new Map();
for(let i=0;i<N;i++){
  map1.set(i, encyclopedia[i])
  map2.set(encyclopedia[i], i)
}

// 명령어 부분에서 만약 숫자가 들어오면 key 기반으로 value 찾기 숫작 아니면 value 기반으로 key 찾기
for(let i=0;i<M;i++){
  if(Number.isInteger(Number(problems[i]))){
    res.push(map1.get(Number(problems[i] - 1)))
  } else{
    res.push(map2.get(problems[i]) + 1)
  }
}

console.log(res.join('\n'))