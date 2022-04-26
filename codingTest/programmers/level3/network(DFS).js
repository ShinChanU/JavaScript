// 무방향 그래프
const solution = (n, computers) => {
  let answer = 0;
  let ch = Array.from({ length: n }, () => 0);

  const DFS = (x) => {
    console.log("DFS On");
    for (let i = 0; i < n; i++) {
      if (ch[i] === 0 && computers[x][i] === 1) {
        ch[i] = 1;
        DFS(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (ch[i] === 0) {
      console.log(ch, i);
      answer++;
      ch[i] = 1;
      DFS(i);
    }
  }

  return answer;
};

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // output: 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // output: 1
console.log(
  solution(4, [
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [1, 1, 0, 1],
  ])
); // output: 2
// 0426 done
