const solution = (info, edges) => {
  let answer = 0;
  let graph = Array.from({ length: info.length }, () => []);

  edges.forEach((e) => {
    graph[e[0]].push(e[1]);
  });

  const DFS = (nodeArr, s, w) => {
    answer = Math.max(answer, s);

    if (s <= w) {
      return;
    } else {
      for (let x of nodeArr) {
        let tmpArr = [...nodeArr.filter((e) => e !== x), ...graph[x]];
        if (!info[x]) {
          DFS(tmpArr, s + 1, w);
        } else {
          DFS(tmpArr, s, w + 1);
        }
      }
    }
  };

  DFS(graph[0], 1, 0);

  return answer;
};