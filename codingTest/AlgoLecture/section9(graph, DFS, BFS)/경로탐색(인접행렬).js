// 경로탐색, 인접행렬
const solution = (n, arr) => {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array(n + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    graph[arr[i][0]][arr[i][1]] = 1;
  }

  const DFS = (L, v) => {
    if (L > n) {
      return;
    } else if (v === n) {
      answer++;
    } else {
      for (let i = 1; i < graph.length; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[v] = 1;
          DFS(L + 1, i);
          ch[v] = 0;
        }
      }
    }
  };

  DFS(0, 1);

  return answer;
};

const a = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(solution(5, a));
// 0425 study.

const solution2 = (n, arr) => {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 이 형식 암기
  let ch = Array(n + 1).fill(0);

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  const DFS = (v) => {
    if (v === n) {
      answer++;
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  };

  ch[1] = 1;
  DFS(1);

  return answer;
};

console.log(solution2(5, a));
// 0425 lecture.
