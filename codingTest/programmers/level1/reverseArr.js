const solution = (n) => {
  return n
    .toString()
    .split("")
    .map((e) => parseInt(e))
    .reverse();
};

console.log(solution(12345));

// 0216 done.
