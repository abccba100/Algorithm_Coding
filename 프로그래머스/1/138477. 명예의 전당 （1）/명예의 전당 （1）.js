function solution(k, score) {
  var answer = [];
  let tops = []

  for(let i=0;i<score.length;i++){
    if(tops.length < k){
      tops.push(score[i])
      tops.sort((a, b) => b - a)
      answer.push(tops[tops.length - 1])
    } else{
      if(tops[k - 1] < score[i]){
        tops[k - 1] = score[i]
        tops.sort((a, b) => b - a)
      }
      answer.push(tops[k - 1])
    }
  }
  return answer;
}