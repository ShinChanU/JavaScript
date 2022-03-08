// const solution = (a, b, c, d, e, f, g) => {
//   return Math.min(...[a, b, c, d, e, f, g]);
// };

const solution = (a, b, c, d, e, f, g) => {
  const arr = [a, b, c, d, e, f, g];

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
};

console.log(solution(5, 3, 7, 11, 2, 15, 17));

// 220308
