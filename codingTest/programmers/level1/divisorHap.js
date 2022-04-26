const solution = (n) => {
  if (n <= 0) return 0;
  const divisors = [];

  for (let i = 1; i <= n; i++) {
    n % i === 0 ? divisors.push(i) : "";
  }

  return divisors.reduce((a, b) => a + b);
};

console.log(solution(0));

// 0217 done.
