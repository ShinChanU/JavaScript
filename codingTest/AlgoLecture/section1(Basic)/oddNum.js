const solution = (arr) => {
  const result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
      sum += arr[i];
    }
  }
  return [sum, Math.min(...result)];
};

console.log(solution([12, 77, 38, 41, 53, 92, 85]));

// 220308
