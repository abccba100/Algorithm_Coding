function solution(n) {
    var answer = n.toString().split("").map(Number).reduce((a, b) => a + b, 0);

    return answer;
}