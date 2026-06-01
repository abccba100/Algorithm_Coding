function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;

  const dist = Array.from({ length: N }, () => Array(M).fill(-1));
  const DIR = [[-1,0],[1,0],[0,-1],[0,1]];

  dist[0][0] = 1;
  const queue = [[0, 0]];
  let head = 0;

  while (head < queue.length) {
    const [r, c] = queue[head++];

    if (r === N - 1 && c === M - 1) return dist[r][c];

    for (const [dr, dc] of DIR) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 && nr < N &&
        nc >= 0 && nc < M &&
        maps[nr][nc] === 1 &&
        dist[nr][nc] === -1
      ) {
        dist[nr][nc] = dist[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  return -1;
}