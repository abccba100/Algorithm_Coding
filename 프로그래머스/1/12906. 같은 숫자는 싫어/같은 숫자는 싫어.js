function solution(arr)
{
    let answer = [];
    let nowNumber = arr[0];

    for(let i=1; i < arr.length + 1; i++){
      if(nowNumber !== arr[i]){
        answer.push(nowNumber);
        nowNumber = arr[i];
      }
    }
    
    return answer;
}