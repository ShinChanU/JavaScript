/*
정점이 매우 많아지면 인접행렬이 아닌 인접리스트로 해야함
차이점은 인접행렬을 가고자 하는 정점을 열의 번호로 지정
ex. [0, 1, 0] : 1 2 3 노드 중 2로 간다.
인접리스트는 가고자하는 정점을 출발 정점행의 값으로 지정
ex. [2, 4, 5] : 2 4 5 노드로 간다.
*/

const solution = (n, arr) => {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array(n + 1).fill(0);

  for (let [a, b] of arr) {
    graph[a].push(b); // 인접리스트로 만들기, 정점 a행에 b push
  }

  const DFS = (v) => {
    if (v === n) {
      answer++;
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        let endV = graph[v][i];
        if (ch[endV] === 0) {
          ch[endV] = 1;
          DFS(endV);
          ch[endV] = 0;
        }
      }
    }
  };

  ch[1] = 1;
  DFS(1);

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
// 0425 study, lecture.
