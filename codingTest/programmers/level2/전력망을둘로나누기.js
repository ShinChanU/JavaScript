const solution = (n, wires) => {
  let answer = Number.MAX_SAFE_INTEGER;
  let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  let check = Array.from({ length: n + 1 }, () => 0);
  let cnt = 1;

  for (let [a, b] of wires) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  const DFS = (L) => {
    if (L === n) {
      // console.log("Asdf", cnt);
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        if (!check[i] && graph[L][i]) {
          check[i] = 1;
          cnt++;
          DFS(i);
          check[i] = 0;
        }
      }
    }
  };

  for (let [a, b] of wires) {
    cnt = 1;
    graph[a][b] = 0;
    graph[b][a] = 0;
    DFS(1);
    graph[a][b] = 1;
    graph[b][a] = 1;
    // answer = Math.min(answer, Math.abs(n -))
    console.log(cnt);
  }

  console.log(graph, check);

  return answer;
};

const n1 = 9;
const wires1 = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

const n2 = 4;
const wires2 = [
  [1, 2],
  [2, 3],
  [3, 4],
];

const n3 = 7;
const wires3 = [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
];

console.log(solution(n1, wires1)); // 3
console.log(solution(n2, wires2)); // 0
console.log(solution(n3, wires3)); // 1

// 0928 hard..
// https://m.blog.naver.com/dlaxodud2388/222621742798
