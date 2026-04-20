function solution(priorities, location) {
  var answer = 0;
  let temp;

  
  while(priorities.length !== 0){

    if(priorities[0] < Math.max(...priorities)){
      temp = priorities.shift()
      priorities.push(temp)
      if(location === 0){
        location = priorities.length - 1
      } else{
        location--
      }
    } else{
      answer++
      priorities.shift()
      if(location === 0){
        break
      } else{
        location--
      }
    }
  }
  return answer;
}