const solution = (n, arr) => {
  let result = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      result++;
    }
  }
  return result;
};

console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));
console.log(solution(8, [130, 125, 141, 149, 143, 150, 155, 111]));
