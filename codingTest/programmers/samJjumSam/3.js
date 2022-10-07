const solution = (board, x, y) => {
  let answer;

  let graph = board.map((e) => e.split(""));
  let xLen = graph.length;
  let yLen = graph[0].length;
  let check = Array.from({ length: xLen }, () => Array(yLen).fill(0));
  let dxy = [
    [-1, -1, 0, 1, 1, 1, 0, -1],
    [0, 1, 1, 1, 0, -1, -1, -1],
  ];
  if (graph[x][y] === "M") {
    graph[x][y] = "X";
    answer = graph;
  } else {
    let stack = [[[x, y]]];
    while (stack.length) {
      for (let tmp of stack.shift()) {
        let [px, py] = tmp;
        if (graph[px][py] === "M") {
          check[px][py] = "E";
        }

        for (let i = 0; i < dxy[0].length; i++) {
          let nx = px + dxy[0][i];
          let ny = py + dxy[1][i];
          let arr = [];
          if (nx >= 0 && nx < xLen && ny >= 0 && ny < yLen) {
            // 범위 설정과, 다시 복귀하지 않는 조건 설정
            if (graph[nx][ny] !== "M") {
              // 인접한 값 지뢰가 아님
              if (check[px][py] === 0 || check[px][py] === "B") {
                // 기준이 초기값 이거나 B
                check[px][py] = "B";
              } else {
                // 1 or 2 or 3
                // 지나감
              }
              if (
                check[nx][ny] === 0 &&
                (check[px][py] === 0 || check[px][py] === "B")
              ) {
                // stack.push([nx, ny]);
                arr.push([nx, ny]);
                check[nx][ny] = "B";
              }
            }
            if (graph[nx][ny] === "M") {
              // 인접한 값 지뢰다!
              check[nx][ny] = "E";
              if (check[px][py] === "B") {
                check[px][py] = 1;
              } else {
                check[px][py]++;
              }
            }
            if (check[px][py] === "B") {
              stack.push(arr);
            }
          }
        }
      }
    }

    answer = check;
  }

  return answer.map((e) => e.join(""));
};

const board1 = ["EEEEE", "EEMEE", "EEEEE", "EEEEE"];
const y1 = 2;
const x1 = 0;

const board2 = ["MME", "EEE", "EME"];
const y2 = 0;
const x2 = 0;

console.log(solution(board1, y1, x1)); // ["B1E1B", "B1E1B", "B111B", "BBBBB"]
console.log(solution(board2, y2, x2)); // ["XME", "EEE", "EME"]
// 풀다 종료 제출, fail
// 1에서 계속 stack에 push가 됨.
