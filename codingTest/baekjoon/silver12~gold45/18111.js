const solution = (data, graph) => {
  let result = [];
  let N = data[0];
  let M = data[1];
  let B = data[2];
  let ch = Array.from({ length: N }, () => Array(M).fill(0));
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];

  let [min, max] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  let queue = [[0, 0, 0]];
  while (queue.length) {
    console.log(queue);
    let [x, y, z] = queue.shift();
    ch[x][y] = 1;
    if (z > 0) {
      rr;
    }
    let tmp = graph[x][y];
    if (tmp > max) max = tmp;
    if (tmp < min) min = tmp;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < N && ny < M && !ch[nx][ny]) {
        let temp = 0;
        if (max > graph[nx][ny]) temp = max - graph[nx][ny];
        if (min < graph[nx][ny]) temp = min - graph[nx][ny];
        queue.push([nx, ny, temp]);
      }
    }
  }

  return result;
};

let test = [
  [3, 4, 99],
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
  ],
];

console.log(solution(test[0], test[1]));
