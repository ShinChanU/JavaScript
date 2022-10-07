const solution = (x, y, board) => {
  let answer;
  let graph = board.map((e) => e.split(""));
  let check = Array.from({ length: x }, () => Array(y).fill(0));
  let queue = [[0, 0]];
  check[0][0] = 1;
  const dx = [0, 1, 1];
  const dy = [1, 1, 0];
  let i = 0;

  while (queue.length) {
    let [px, py] = queue.shift();
    let tmp = [];
    for (let k = 0; k < dx.length; k++) {
      let nx = px + dx[k];
      let ny = py + dy[k];
      if (nx < x && ny < y && !check[nx][ny]) {
        if (graph[px][py] === graph[nx][ny]) {
          tmp.push([nx, ny]);
        }
      }
    }
    console.log(tmp);
    if (tmp.length === dx.length) {
      tmp.forEach((e) => {
        queue.push([e[0], e[1]]);
        check[e[0]][e[1]] = 1;
      });
    }
    console.log(queue);
  }
  i++;

  const DFS = () => {};

  DFS(x, y, check);

  return answer;
};

const m1 = 4;
const n1 = 5;
const board1 = ["CCBDE", "AAADE", "AAABF", "CCBBF"];

const m2 = 6;
const n2 = 6;
const board2 = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];

console.log(solution(m1, n1, board1)); // 14
console.log(solution(m2, n2, board2)); // 15
