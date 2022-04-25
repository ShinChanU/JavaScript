const solution = (n) => {
  let answer;
  let sum = 0;
  let i = 1;
  // console.log(Math.)
  while (1) {
    if (sum + 3 ** i >= n) {
      break;
    } else sum += 3 ** i;
    i++;
  }
  console.log(sum, i);

  return answer;
};

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(10));
console.log(solution(12));
console.log(solution(13));
console.log(solution(28));
console.log(solution(42));
console.log(solution(235));
console.log(solution(2312));
