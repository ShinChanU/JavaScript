const solution = (board, moves) => {
  let answer = 0;
  let stack = [];

  for (let x of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x - 1] !== 0) {
        stack.push(board[i][x - 1]);
        board[i][x - 1] = 0;
        console.log(board, stack);
        break;
      }
    }
  }

  return answer;
};

const a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const b = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(a, b));

// 0401 doing
