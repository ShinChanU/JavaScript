const isPrime = (e) => {
  if (e <= 1) return false;

  for (let i = 2; i <= Math.sqrt(e); i++) {
    if (e % i === 0) return false;
  }

  return true;
};

const solution = (arr) => {
  const result = [];

  arr.map((e) => {
    let num = Number(e.toString().split("").reverse().join(""));
    isPrime(num) ? result.push(num) : "";
  });

  return result;
};

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));

// 0317 done.
