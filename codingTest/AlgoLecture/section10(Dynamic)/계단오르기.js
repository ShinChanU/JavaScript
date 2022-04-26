// 동적 계획법
const solution = (n) => {
  let answer = 0;
  let x = 0,
    y = 0;

  const factorial = (m) => {
    if (m <= 1) return 1;
    else {
      return m * factorial(m - 1);
    }
  };

  for (let i = 0; i <= n; i++) {
    y = n - i;
    if (y % 2 === 0) {
      x = i;
      y /= 2;
      answer += factorial(x + y) / (factorial(x) * factorial(y));
    }
  }

  return answer;
};

console.log(solution(7));
// 0426 study

const solution2 = (n) => {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i < dy.length; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  answer = dy[n];

  return answer;
};

console.log(solution2(7));
// 0426 lecture
// 작은 것 부터 큰 것을 유추해가는 형식, 점화식과 비슷
