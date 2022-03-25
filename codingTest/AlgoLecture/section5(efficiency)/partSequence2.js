const solution = (m, arr) => {
  let answer = 0;
  let lt = (rt = sum = tmp = 0);
  let n = arr.length;

  while (rt < n) {
    lt = rt;
    let val = arr[rt++];
    if (val <= m) answer++;
    sum = val;
    while (lt > 0) {
      sum += arr[--lt];
      if (sum <= m) answer++;
      else break;
    }
  }

  return answer;
};

console.log(solution(5, [1, 1, 1, 1]));

// 0323 doing

const solution2 = (m, arr) => {
  let answer = 0;
  let lt = (sum = 0);
  let n = arr.length;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      // sum이 커지면 lt에 해당하는 값을 빼고 증가
      sum -= arr[lt++];
    }
    answer += rt - lt + 1; // sum < m이 되면 부분집합들도 참, 그 전체 집합의 길이만큼 개수가 나옴
  }

  return answer;
};

console.log(solution2(5, [1, 3, 1, 2, 3]));

// 0325 done. 1, 2 다시한번 풀어보기, 투포인터
