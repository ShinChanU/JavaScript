const solution = (arr, divisor) => {
  let result = arr.filter((v) => (
    v%divisor === 0
  )).sort((a, b) => a - b);

  return result.length === 0 ? [-1] : result;
}

console.log(solution([3,2,6], 10));

// 0214 done.