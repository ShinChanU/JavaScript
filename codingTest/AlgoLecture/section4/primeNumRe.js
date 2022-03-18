const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
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

const solution2 = (arr) => {
  const result = [];

  for (let x of arr) {
    let res = 0;
    while (x) {
      // 숫자 뒤집기
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }

    if (isPrime(res)) result.push(res);
  }

  return result;
};

console.log(solution2([32, 55, 62, 20, 250, 370, 200, 30, 100]));

// 0318 강의 풀이
