// DFS
const solution = (arr) => {
  let answer = 0;
  // 시계방향으로 움직임 8개의 방향으로, 위, 오른위대각, 오른, 오른아래대각, 아래, 왼아래대각, 왼, 왼위대각
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  const DFS = (x, y) => {
    arr[x][y] = 0;
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx <= 6 && ny <= 6 && arr[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
    arr[x][y] = 0;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
};

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
// 0426 study, lecture
