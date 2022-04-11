const solution = (arr) => {
  let answer = [];

  answer = arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  return answer;
};

let a = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(a));
// 0411 study, lecture
