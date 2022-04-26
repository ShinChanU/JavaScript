// 무방향 그래프
const solution = (n, computers) => {
  let answer = 0;
  let queue = [];
  let ch = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1) {
        computers[i][j] = 0;
        if (ch[j] === 0) {
          answer++;
          queue.push(i);
          ch[i] = 1;
          while (queue.length) {
            let x = queue.shift();
            for (let k = 0; k < n; k++) {
              if (ch[k] === 0 && computers[x][k] === 1) {
                ch[k] = 1;
                computers[x][k] === 0;
                queue.push(k);
              }
            }
          }
        }
      }
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
// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1],
//   ])
// ); // output: 1
console.log(
  solution(4, [
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [1, 1, 0, 1],
  ])
); // output: 2
