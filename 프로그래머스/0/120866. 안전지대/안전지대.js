function solution(board) {
  var answer = 0;

  const isZero = (x, y) => {
    return board[x][y] === 0;
  }

  const isZone = (x, y) => {
    if(x < 0 || x >= board.length || y < 0 || y >= board[0].length) return false;
    return isZero(x, y);
  }

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] === 1) {
        if(isZone(i+1, j)) board[i+1][j] = 2;
        if(isZone(i-1, j)) board[i-1][j] = 2;
        if(isZone(i, j+1)) board[i][j+1] = 2;
        if(isZone(i, j-1)) board[i][j-1] = 2;
        if(isZone(i+1, j+1)) board[i+1][j+1] = 2;
        if(isZone(i+1, j-1)) board[i+1][j-1] = 2;
        if(isZone(i-1, j+1)) board[i-1][j+1] = 2;
        if(isZone(i-1, j-1)) board[i-1][j-1] = 2;
      }
    }
  }
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] === 0) answer++;
    }
  }
  return answer;
}