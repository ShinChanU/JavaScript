const solution = (n) => {
  return (1 + n) * (n / 2);
};

console.log(solution(6)); // 21
console.log(solution(10)); // 55

const solution2 = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
};

console.log(solution2(6)); // 21
console.log(solution2(10)); // 55

//220308
