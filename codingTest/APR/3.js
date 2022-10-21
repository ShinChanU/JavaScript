// const solution = (maps) => {
//   let answer = 0;
//   let n = maps.length;
//   let m = maps[0].length;
//   let check = Array.from({ length: n }, () => Array(m).fill(0));

//   const dx = [0, 1, 0, -1];
//   const dy = [1, 0, -1, 0];

//   const DFS = (coord, sum) => {
//     let [x, y] = coord;
//     console.log(coord, sum);
//     if (x >= n || y >= m) return sum;
//     else {
//       for (let k = 0; k < 4; k++) {
//         let nx = x + dx[k];
//         let ny = y + dy[k];
//         if (0 > nx || 0 > ny || nx >= n || ny >= m || !maps[nx][ny]) sum++;
//       }
//       // console.log("hap", sum);

//       for (let k = 0; k < 4; k++) {
//         let nx = x + dx[k];
//         let ny = y + dy[k];
//         if (
//           0 <= nx &&
//           0 <= ny &&
//           nx < n &&
//           ny < m &&
//           !check[nx][ny] &&
//           maps[nx][ny]
//         ) {
//           check[nx][ny] = 1;
//           let closerSum = DFS([nx, ny], sum);
//           if (closerSum > sum) sum = closerSum;
//           check[nx][ny] = 0;
//         }
//       }
//     }
//     console.log(coord, "sum", sum);
//     return sum;
//   };

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (maps[i][j]) {
//         check[i][j] = 1;
//         let test = DFS([i, j], 0);
//         console.log("a", test);
//         check[i][j] = 0;
//       }
//     }
//   }

//   return answer;
// };

const solution = (maps) => {
  let answer = 0;
  let n = maps.length;
  let m = maps[0].length;
  let check = Array.from({ length: n }, () => Array(m).fill(0));
  let queue = [];

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const BFS = (_queue, _sum) => {
    while (_queue.length) {
      let [x, y] = _queue.shift();
      check[x][y] = 1;
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (
          0 <= nx &&
          0 <= ny &&
          nx < n &&
          ny < m &&
          !check[nx][ny] &&
          maps[nx][ny]
        ) {
          _queue.push([nx, ny]);
          check[nx][ny] = 1;
        } else if (0 > nx || 0 > ny || nx >= n || ny >= m || !maps[nx][ny])
          _sum++;
      }
    }
    return _sum;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j]) {
        queue.push([i, j]);
        answer = Math.max(answer, BFS(queue, 0));
      }
    }
  }

  return answer;
};

const maps1 = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [1, 1, 1, 0, 1],
];
const maps2 = [
  [1, 0, 1, 1],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
];

console.log(solution(maps1));
console.log(solution(maps2));
