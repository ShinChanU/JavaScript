const isPrime = (n) => {
  if (n === 2) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

const solution = (n) => {
  let result = [];

  for (let i = n; i > 1; i--) {
    isPrime(i) ? result.push(i) : "";
  }

  return result.length;
};

console.log(solution(10));

// 0218 done.
// 에라토스테네스의 체 원리를 사용해야함..
