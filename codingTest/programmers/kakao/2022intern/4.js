const solution = (n, paths, gates, summits) => {
  let answer = [];
  let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let queue = [];
  let sum = 0;

  for (let [x, y, val] of paths) {
    graph[x][y] = val;
    graph[y][x] = val;
  }
  console.log(graph);

  for (let x of gates) {
    const DFS = (now, flag) => {
      if (x === now) {
        return;
      } else {
        for (let i = 1; i <= n; i++) {
          console.log(i);
          if (graph[now][i] !== 0) {
            if (i === now && !flag) continue;
            else if (gates.includes(i)) continue;
            else if (summits.includes(i)) {
              flag = 1;
              ch.map((e) => {
                return (e = 0);
              });
            }
            ch[i] = 1;
            DFS(i, flag);
            ch[i] = 0;
          }
        }
      }
    };

    DFS(x, 0);
  }

  // for (let gate of gates) {
  //   let flag = 0;
  //   queue.push(gate);
  //   console.log(queue);
  //   while (queue.length) {
  //     let x = queue.shift();
  //     console.log(x);
  //     // console.log(queue);

  //     for (let i = 1; i <= n; i++) {
  //       if (i === gate && graph[x][i] !== 0 && flag) {
  //         break;
  //       }
  //       console.log(x, i);
  //       if (ch[i] === 0 && graph[x][i] !== 0 && !gates.includes(i)) {
  //         queue.push(i);
  //         console.log(queue);
  //         if (summits.includes(i)) {
  //           flag = 1;
  //           for (let j = 1; j <= n; j++) {
  //             ch[j] = 0;
  //           }
  //         }
  //         ch[i] = 1;
  //       }
  //     }
  //   }
  // }

  return answer;
};

console.log(
  solution(
    6,
    [
      [1, 2, 3],
      [2, 3, 5],
      [2, 4, 2],
      [2, 5, 4],
      [3, 4, 4],
      [4, 5, 3],
      [4, 6, 1],
      [5, 6, 1],
    ],
    [1, 3],
    [5]
  )
);
