// BFS 문제 풀이
const solution = (maps) => {
  let n = maps.length - 1;
  let m = maps[0].length - 1;
  let answer = 10000;
  const queue = [];

  // 12 3 6 9
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  maps[0][0] = 0;
  queue.push([0, 0, 1]);

  while (queue.length) {
    let [x, y, dis] = queue.shift();
    if (x === n && y === m && answer > dis) answer = dis;

    for (let k = 0; k < 4; k++) {
      let kx = x + dx[k];
      let ky = y + dy[k];
      if (kx >= 0 && kx <= n && ky >= 0 && ky <= m && maps[kx][ky]) {
        maps[kx][ky] = 0;
        queue.push([kx, ky, dis + 1]);
      }
    }
  }

  return answer === 10000 ? -1 : answer;
};

// DFS 문제 풀이
// const solution = (maps) => {
//   let n = maps.length - 1;
//   let m = maps[0].length - 1;
//   let answer = 10000;

//   // 12 3 6 9
//   const dx = [-1, 0, 1, 0];
//   const dy = [0, 1, 0, -1];

//   const DFS = (x, y, dis) => {
//     console.log(x, y, dis, answer);
//     if (answer < dis) return;
//     if (x === n && y === m) {
//       if (answer > dis) answer = dis;
//       return;
//     } else {
//       for (let k = 0; k < 4; k++) {
//         let kx = x + dx[k];
//         let ky = y + dy[k];
//         if (kx >= 0 && kx <= n && ky >= 0 && ky <= m && maps[kx][ky]) {
//           maps[kx][ky] = 0;
//           DFS(kx, ky, dis + 1);
//           maps[kx][ky] = 1;
//         }
//       }
//     }
//   };

//   maps[0][0] = 0;
//   DFS(0, 0, 1);

//   return answer === 10000 ? -1 : answer;
// };

const test1 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]; // 11
const test2 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
]; // -1

console.log(solution(test1));
// console.log(solution(test2));

/* 
1. DFS를 사용하면 효율성 통과가 되지 않는다.
2. DFS는 전체 경로를 탐색하며 특수한 상황을 저장해야할 때 필요하다(재귀적으로 돌기 때문)
3. 그 외의 최단 경로(거리)를 구할 때는 BFS가 이득이다.
*/
