const solution = (price, money, count) => {
  const amount = [];

  for (let i = 1; i <= count; i++) {
    amount.push(price * i);
  }

  const lessMoney = amount.reduce((a, b) => a + b) - money;
  return lessMoney > 0 ? lessMoney : 0;
};

console.log(solution(3, 50, 4));

// 가우스 공식, 등차수열합 쓰는 경우도 있음..
// 0225 done.
