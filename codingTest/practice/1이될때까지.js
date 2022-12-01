// N을 1로 만들어라, k로 나누던가, 1을 빼서
const solution = (n, k) => {
  let answer = 0;

  while (1) {
    let target = parseInt(n / k) * k;
    answer += n - target;
    n = target;
    if (n < k) break;
    n = parseInt(n / k);
    answer += 1;
    // if (n === 1) break;
    // if (n < 1) return false;
    // if ((n / k) % 1 === 0) {
    //   n = n / k;
    //   answer++;
    // } else {
    //   n--;
    //   answer++;
    // }
  }

  answer += n - 1;

  return answer;
};

console.log(solution(17, 4));
// console.log(solution(25, 5));
// console.log(solution(25, 3));
