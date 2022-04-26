const solution = (n) => {
  let result = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      result = i;
      break;
    }
  }

  return result;
};

console.log(solution(10));
console.log(solution(12));
console.log(solution(3));

// 0225 done.
