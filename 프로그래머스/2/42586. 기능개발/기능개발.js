function solution(progresses, speeds) {
  let answer = [];
  let count = 0
  
  while(progresses.length !== 0){

    for(let j=0;j<progresses.length;j++){
      progresses[j] += speeds[j];
    }

    while(progresses[0] >= 100){
      progresses.shift()
      speeds.shift()
      count++
    }

    answer.push(count)
    count = 0
  }

  answer = answer.filter(e => e !== 0)
  return answer;
}