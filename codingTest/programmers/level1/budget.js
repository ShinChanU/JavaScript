// d는 부서별로 신청한 예산 금액, budget은 전체 예산
const solution = (d, budget) => {
  let result = 0;
  const arr = d.sort((a, b) => a - b);

  let i = 0;
  for (i; i < d.length; i++) {
    result = result + arr[i];
    if (result > budget) break;
  }

  // d.sort().reduce((acc, cur, index) => {
  //   console.log(d, acc, cur, index, budget, result);
  //   if (acc + cur > budget) {
  //     result = index;
  //     return;
  //   } else {
  //     result = index + 1;
  //     return acc + cur;
  //   }
  // });

  return i;
};

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
console.log(solution([1, 1, 2, 4, 2], 10));
console.log(solution([1, 1, 1], 10));

// reduce로 풀거면 그려가면서 해보셈
// 0301 done.
