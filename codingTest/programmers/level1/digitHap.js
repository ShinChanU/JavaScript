const solution = (n) => {
  return n
    .toString()
    .split("")
    .map((e) => parseInt(e))
    .reduce((a, b) => a + b);
};

console.log(solution(987));

// 0216 done.
