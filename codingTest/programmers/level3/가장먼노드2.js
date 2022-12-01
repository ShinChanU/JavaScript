const solution = (n, road, k) => {
  // let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  // road.forEach((e) => {
  //   let [x, y, dis] = e;
  //   if (graph[x][y]) {
  //     graph[x][y] = graph[x][y] > dis ? dis : graph[x][y];
  //   } else {
  //     graph[x][y] = dis;
  //   }
  //   if (graph[y][x]) {
  //     graph[y][x] = graph[y][x] > dis ? dis : graph[y][x];
  //   } else {
  //     graph[y][x] = dis;
  //   }
  // });

  // let table = Array.from({ length: n + 1 }, () => Infinity);
  // table[0] = 0;
  // table[1] = 0;

  // graph[1].forEach((e, i) => {
  //   if (e) table[i] = e + table[1] < table[i] ? e + table[1] : table[i];
  // });

  // for (let i = 2; i < n; i++) {
  //   graph[i].forEach((e, idx) => {
  //     if (e) table[idx] = e + table[i] < table[idx] ? e + table[i] : table[idx];
  //   });
  // }

  // return table.filter((e) => e <= k).length - 1;

  const graph = Array.from({ length: n }, () => Array(n).fill(0));
  let check = Array(n).fill(0);
  // 최단 경로를 저장할 배열 선언
  let dy = Array(n).fill(Infinity);
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
    // let min = Number.MAX_SAFE_INTEGER;
    // let node = 0;
    // for (let i = 1; i < n; i++)
    //   if (!check[i] && min > dy[i]) {
    //     min = dy[i];
    //     node = i;
    //   }
    // return node;
    let node = 0;
    let max = Infinity;
    dy.forEach((e, i) => {
      if (e < max && !check[i]) {
        max = e;
        node = i;
      }
    });
    return node;
  };

  // 최단 경로를 기준으로 갈수있는 경로의 시간을 더해 다른 값들을 업데이트(작을 때만 -> 최소값)
  const dijkstra = () => {
    let minNode = minDistanceNode();
    console.log(dy, check, minNode);
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

  return dy.filter((e) => e <= k).length;
};

const n1 = 5; // node의 개수
const road1 = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
const k1 = 3; // 배달이 가능한 시간

const n2 = 6;
const road2 = [
  [1, 2, 1],
  [1, 3, 2],
  [2, 3, 2],
  [3, 4, 3],
  [3, 5, 2],
  [3, 5, 3],
  [5, 6, 1],
];
const k2 = 4;

console.log(solution(n1, road1, k1));
// console.log(solution(n2, road2, k2));
