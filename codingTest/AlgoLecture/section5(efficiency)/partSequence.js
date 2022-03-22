const solution = (m, arr) => {
  let answer = 0;
  let p1 = (p2 = 0);
  let n = arr.length;
  let tmp;

  while (p1 < n) {
    tmp = 0;
    p2 = p1;
    while (p2 < n) {
      tmp += arr[p2];
      if (tmp === m) {
        // 일치하는 경우의 수
        answer++;
        break;
      } else if (tmp < m) {
        p2++;
      }
      // 그 다음 index도 확인
      else break; // 해당 p2에서는 경우의수 X\
    }
    p1++;
  }

  return answer;
};

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));

// 0321 done.

const solution2 = (m, arr) => {
  let answer = 0;
  let lt = (rt = 0);
  let n = arr.length;
  let sum = 0;

  while (rt < n) {
    if (sum < m) sum += arr[rt++];
    else if (sum > m) {
      sum -= arr[lt++];
    }
    if (sum === m) {
      answer++;
      sum -= arr[lt++];
    }
  }

  return answer;
};

console.log(solution2(6, [1, 2, 1, 3, 1, 1, 1, 2]));

// 0321 done.
