const solution = (m, n, board) => {
  var answer = 0;
  let graph = Array.from({ length: n }, () => []);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      graph[j].push(board[i][j]);
    }
  }

  const dx = [0, 1, 1];
  const dy = [1, 1, 0];

  const insertDelCoord = (_delCoord, delArr) => {
    for (let [x, y] of delArr) {
      if (!_delCoord[x]) {
        _delCoord[x] = [y];
        answer++;
      } else {
        if (!_delCoord[x].includes(y)) {
          _delCoord[x].push(y);
          answer++;
        }
      }
    }
  };

  const changeZeroBoard = (obj) => {
    for (let x in obj) {
      for (let y of obj[x]) {
        graph[x][y] = "@";
      }
    }
  };

  while (1) {
    let delCoord = {};

    for (let x = 0; x < n; x++) {
      for (let y = 0; y < m; y++) {
        let nowBlock = graph[x][y]; // 초기 블록 알파벳
        if (nowBlock === "@") break;
        let tmpDelArr = [[x, y]];
        for (let k = 0; k < 3; k++) {
          let nx = x + dx[k];
          let ny = y + dy[k];
          if (nx < n && ny < m && graph[nx][ny] === nowBlock) {
            tmpDelArr.push([nx, ny]);
          }
        }

        if (tmpDelArr.length === 4) {
          insertDelCoord(delCoord, tmpDelArr);
        }
      }
    }

    if (!Object.keys(delCoord).length) break;
    changeZeroBoard(delCoord);
    graph = graph.map((arr) => {
      arr.sort((a, b) => {
        if (b === "@") return -1;
        else return 1;
      });
      return arr;
    });
  }

  return answer;
};

const m1 = 4;
const n1 = 5;
const board1 = ["CCBDE", "AAADE", "AAABF", "CCBBF"]; //14
const m2 = 6;
const n2 = 6;
const board2 = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]; //15

console.log(solution(m1, n1, board1));
console.log(solution(m2, n2, board2));
console.log(solution(2, 4, ["ABCD", "EFGH"]));
