const solution = (arr) => {
  let answer = 0;

  const DFS = (r, c) => {
    if (r === 6 && c === 6) {
      answer++;
    } else {
      console.log(r, c, arr[r][c]);
      if (r > 0) {
        if (arr[r - 1][c] === 0) {
          arr[r][c] = 1;
          DFS(r - 1, c);
          arr[r][c] = 0;
        }
      }
      if (c > 0) {
        if (arr[r][c - 1] === 0) {
          arr[r][c] = 1;
          DFS(r, c - 1);
          arr[r][c] = 0;
        }
      }
      if (r < 6) {
        if (arr[r + 1][c] === 0) {
          arr[r][c] = 1;
          DFS(r + 1, c);
          arr[r][c] = 0;
        }
      }
      if (c < 6) {
        if (arr[r][c + 1] === 0) {
          arr[r][c] = 1;
          DFS(r, c + 1);
          arr[r][c] = 0;
        }
      }
    }
  };

  DFS(0, 0);

  return answer;
};

const a = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(a));
// 0425 study.

const solution2 = (arr) => {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1]; // dx, dy 초기화 해서 9시 6시 3시 12시 탐색

  const DFS = (x, y) => {
    if (x === 6 && y === 6) {
      answer++;
    } else {
      for (let k = 0; k < dx.length; k++) {
        let nx = x + dx[k]; // next x 좌표
        let ny = y + dy[k]; // next y 좌표
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && arr[nx][ny] === 0) {
          arr[nx][ny] = 1;
          DFS(nx, ny);
          arr[nx][ny] = 0;
        }
      }
    }
  };

  arr[0][0] = 1;
  // DFS(0, 0);

  return answer;
};

console.log(
  solution2([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
// 0425 lecture.
