const solution = (info, edges) => {
  let answer = 0;
  let graph = Array.from({ length: info.length }, () => []);

  edges.forEach((e) => {
    graph[e[0]].push(e[1]);
  });

  const DFS = (nodeArr, s, w) => {
    answer = Math.max(answer, s);
    if (s <= w) return;
    else {
      for (let x of nodeArr) {
        let tmpArr = [...nodeArr.filter((e) => e !== x), ...graph[x]];
        if (!info[x]) DFS(tmpArr, s + 1, w);
        else DFS(tmpArr, s, w + 1);
      }
    }
  };

  DFS(graph[0], 1, 0);

  return answer;
};

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);

console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);

// 테케 추가 반례, answer의 최대값 설정 순간에 조건을 없앰
console.log(
  solution(
    [0, 1, 0, 0, 0, 1],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
    ]
  )
);
