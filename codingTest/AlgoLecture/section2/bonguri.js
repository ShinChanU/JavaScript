const solution = (arr) => {
  let answer = 0;
  const result = [];
  const array = Array(arr.length + 2).fill(0);

  result.push(array);
  arr.map((e) => {
    result.push([0, ...e, 0]);
  });
  result.push(array);

  for (let i = 1; i < result.length - 1; i++) {
    for (let j = 1; j < result.length - 1; j++) {
      let top, bottom, left, right;
      top = result[i][j - 1];
      bottom = result[i + 1][j];
      left = result[i - 1][j];
      right = result[i][j + 1];
      if (result[i][j] > Math.max(top, bottom, left, right)) {
        answer++;
      }
    }
  }

  return answer;
};

const a = [5, 3, 7, 2, 3];
const b = [3, 7, 1, 6, 1];
const c = [7, 2, 5, 3, 4];
const d = [4, 3, 6, 4, 1];
const e = [8, 7, 3, 5, 2];

console.log(solution([a, b, c, d, e]));

// 0312
