const solution = (n, times) => {
  let answer = 0;
  let len = times.length;
  times.sort((a, b) => a - b);
  let min = times[0];
  let max = times[len - 1];

  // 모든 사람 심사받는 데 걸리는 시간 범위
  let lt = Math.ceil(n / len) * min;
  let rt = Math.ceil(n / len) * max;

  const check = (mid) => {
    let cnt = 0;
    times.map((e) => {
      cnt += parseInt(mid / e);
    });
    return cnt;
  };

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2); // 제한시간 mid초
    let person = check(mid);
    if (n > person) {
      lt = mid + 1;
    } else {
      // n < person
      rt = mid - 1;
      answer = mid;
    }
  }

  return answer;
};

console.log(solution(6, [7, 10]));
console.log(solution(50, [7, 10, 5, 2, 3, 4]));
// 0504 pass, 상식적으로 생각해라
