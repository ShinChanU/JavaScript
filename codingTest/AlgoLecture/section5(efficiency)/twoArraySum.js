const solution = (arr) => {
  const answer = [...arr[0], ...arr[1]];

  return answer.sort((a, b) => a - b); // O(nlogn)
};

const a = [1, 3, 5];
const b = [2, 3, 6, 7, 9];

console.log(solution([a, b]));

// 0319 done.. 효율성..?

const solution2 = (a, b) => {
  // 투포인터 알고리듬: O(n)
  // 포인터를 두 개 만들어서 두개 loop 한번동안 포인터에 해당하는 값들을 비교해서 삽입
  // loop한번이면 해결
  let answer = [];
  let n = a.length;
  let m = b.length;
  let p1 = (p2 = 0); // 포인터 두개 설정
  while (p1 < n && p2 < m) {
    if (a[p1] <= b[p2]) answer.push(a[p1++]);
    else answer.push(b[p2++]);
  }
  while (p1 < n) answer.push(a[p1++]);
  while (p2 < m) answer.push(b[p2++]);

  return answer;
};

console.log(solution2(a, b));

// 0320.. 이게 투포인터알고리즘..
