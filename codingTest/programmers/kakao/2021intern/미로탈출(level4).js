const solution = (n, start, end, roads, traps) => {
  let result = Number.MAX_SAFE_INTEGER;
  let queue = [];
  let board = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  let sum = 0;

  for (let [r, c, w] of roads) {
    board[r][c] = w;
  }

  queue.push(start);

  const reverseBoard = (x) => {
    // x열로 오는 모든 행의 값을 열로 변경
    for (let i = 1; i < board.length; i++) {
      if (board[i][x] !== 0) {
        board[x][i] = board[i][x];
        board[i][x] = 0;
      }
    }
  };

  let tmp = [];

  while (queue.length > 0) {
    let flag = 1;
    let x = queue.shift();
    let temp = tmp.shift();
    if (x === end) {
      result = Math.min(result, sum);
      break;
    }
    if (traps.includes(x)) {
      reverseBoard(x);
    }
    for (let i = 1; i < board[x].length; i++) {
      if (board[x][i] !== 0) {
        sum += board[x][i];
        tmp.push(board[x][i]);
        queue.push(i);
        flag = 0;
      }
    }
    if (flag) {
      sum -= temp;
    }
  }

  return result;
};

console.log(
  solution(
    3,
    1,
    3,
    [
      [1, 2, 2],
      [3, 2, 3],
      [2, 3, 1],
    ],
    [2]
  )
);
console.log(
  solution(
    4,
    1,
    4,
    [
      [1, 2, 1],
      [3, 2, 1],
      [2, 4, 1],
    ],
    [2, 3]
  )
);

// 0501 fail, 다익스트라 사용해야함
