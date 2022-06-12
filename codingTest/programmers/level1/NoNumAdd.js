const solution = (arr) => {
  return 45 - arr.reduce((a, b) => a + b);
};

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
// 0611
