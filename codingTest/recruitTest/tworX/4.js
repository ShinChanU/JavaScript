const solution4 = (grid, k) => {
  let answer = 0;
  let n = grid.length;
  let m = grid[0].length;
  let graph = Array.from({ length: n }, () => Array(m).fill(0));
  let dxy = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      graph[i][j] = grid[i][j] === "F" ? 2 : grid[i][j] === "#" ? 1 : 0;
    }
  }

  console.log(graph);

  const DFS = (x, y, cnt, ans, prev) => {
    graph[x][y] = 1;
    if (x === n - 1 && y === m - 1) {
      console.log("여기", ans);
      answer = ans;
      return;
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dxy[0][i];
        let ny = y + dxy[1][i];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] !== 1) {
          console.log("for", nx, ny, cnt);
          if (graph[nx][ny] === 2 && cnt === 0) return;
          if (cnt === 0) {
            cnt += k;
            ans++;
          }
          let tmp = graph[nx][ny];
          graph[nx][ny] = 1;
          DFS(nx, ny, cnt - 1, ans, tmp);
          console.log("돌아와", nx, ny, cnt, tmp);
          if (prev === 0) {
            console.log("TESt", nx, ny);
            DFS(nx, ny, k - 2, ans++, tmp);
          }
          graph[nx][ny] = tmp;
        }
      }
    }
    graph[x][y] = prev;
  };

  DFS(0, 0, k - 1, 0, 1);

  return answer;
};

console.log(solution4(["..FF", "###F", "###."], 4)); // 1
console.log(solution4(["..FF", "###F", "###."], 5)); // 0
// console.log(
//   // 5
//   solution4(
//     [
//       ".F.FFFFF.F",
//       ".########.",
//       ".########F",
//       "...######F",
//       "##.######F",
//       "...######F",
//       ".########F",
//       ".########.",
//       ".#...####F",
//       "...#......",
//     ],
//     6
//   )
// );
// 모루겠음... 답지오면 확인하고 싶다..
