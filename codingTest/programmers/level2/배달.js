const solution = (N, road, K) => {
  const graph = Array.from({ length: N }, () => Array(N).fill(0));
  let check = Array(N).fill(0);
  // 최단 경로를 저장할 배열 선언
  let dy = Array(N).fill(Number.MAX_SAFE_INTEGER);
  for (let [a, b, c] of road) {
    if (graph[a - 1][b - 1])
      graph[a - 1][b - 1] = Math.min(graph[a - 1][b - 1], c);
    else graph[a - 1][b - 1] = c;
    if (graph[b - 1][a - 1])
      graph[b - 1][a - 1] = Math.min(graph[b - 1][a - 1], c);
    else graph[b - 1][a - 1] = c;
  }

  // 초기값 선언
  dy[0] = 0;
  check[0] = 1;
  graph[0].forEach((e, i) => {
    if (e) dy[i] = e;
  });

  // 최단 거리를 가진 노드 찾기
  const minDistanceNode = () => {
    let min = Number.MAX_SAFE_INTEGER;
    let node = 0;
    for (let i = 1; i < N; i++)
      if (!check[i] && min > dy[i]) {
        min = dy[i];
        node = i;
      }
    return node;
  };

  // 최단 경로를 기준으로 갈수있는 경로의 시간을 더해 다른 값들을 업데이트(작을 때만 -> 최소값)
  const dijkstra = () => {
    let minNode = minDistanceNode();
    if (!minNode) return;
    graph[minNode].forEach((e, i) => {
      if (e && !check[i]) {
        if (dy[i] > dy[minNode] + e) {
          dy[i] = dy[minNode] + e;
        }
      }
    });
    check[minNode] = 1;
    dijkstra();
  };

  dijkstra();

  return dy.filter((e) => e <= K).length;
};

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
);
