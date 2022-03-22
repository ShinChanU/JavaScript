const solution = (a, b) => {
  // O(n+n)
  let answer = [];
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  let n = a.length;
  let m = b.length;

  while (p1 < n && p2 < m) {
    if (a[p1] === b[p2]) {
      answer.push(a[p1]);
      p1++;
      p2++;
    } else if (a[p1] < b[p2]) p1++;
    else p2++;
  }

  return answer;
};

const a = [1, 3, 9, 5, 2];
const b = [3, 2, 5, 7, 8, 3];

console.log(solution(a, b));

// 0321 two Pointer Algorithm
