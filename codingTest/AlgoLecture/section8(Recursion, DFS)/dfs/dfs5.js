const solution = (m, arr) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  const DFS = (L, time, sum) => {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, time + arr[L][1], sum + arr[L][0]); // 해당 L의 문제를 푼경우
      DFS(L + 1, time, sum); // 안 푼 경우
    }
  };

  DFS(0, 0, 0);

  return answer;
};

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);

// 0418 study

const solution2 = (m, ps, pt) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;

  const DFS = (L, sum, time) => {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]); // 해당 L의 문제를 푼경우
      DFS(L + 1, sum, time); // 안 푼 경우
    }
  };

  DFS(0, 0, 0);

  return answer;
};

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution2(20, ps, pt));

// 0418 lecture
