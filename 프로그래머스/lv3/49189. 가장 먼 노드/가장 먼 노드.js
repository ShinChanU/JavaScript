const solution = (n, edge) => {
  let graph = Array.from({ length: n }, () => []);
  let dy = Array.from({ length: n }, () => Infinity);
  let visited = Array.from({ length: n }, () => 0);

  edge.forEach((e) => {
    const [a, b] = e;
    graph[a - 1].push(b - 1);
    graph[b - 1].push(a - 1);
  });

  let queue = [];
  dy[0] = 0;
  visited[0] = 1;
  for (let i = 0; i < graph[0].length; i++) {
    dy[graph[0][i]] = 1;
  }
  queue.push(graph[0]);

  while (queue.length) {
    let x = queue.shift();

    for (let i = 0; i < x.length; i++) {
      let prevNode = x[i];

      for (let j = 0; j < graph[prevNode].length; j++) {
        let nextNode = graph[prevNode][j];
        if (!visited[nextNode] && dy[prevNode] + 1 < dy[nextNode]) {
          dy[nextNode] = dy[prevNode] + 1;
          queue.push([nextNode]);
          visited[nextNode] = 1;
        }
      }
    }
  }
  let max = Math.max(...dy);

  return dy.filter((e) => e === max).length;
};