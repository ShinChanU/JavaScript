const solution = (arr) => {
  return arr.reduce((a, b) => a + b)/arr.length;
};

console.log(solution([5, 5]));