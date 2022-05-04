// 어피치의 점수별 화살 개수 주어짐, 라이언이 격차를 크게 벌려서 이기는 경우의 수를 구해라
// n은 화살개수인데 1~10임, 별로 안크다..
const solution = (n, info) => {
  let result = [];
  // let AScore = 0;
  // let RScore= 0;

  const DFS = (L, n, aSco, rSco) => {
    if (L > 10) return;
    if (L === 10 && n === 0) {
      console.log(aSco, rSco);
      return;
    } else {
      for (let i = 0; i <= n; i++) {
        result[L] = i;
        if (info[L] !== 0 || result[L] !== 0) {
          if (info[L] >= result[L]) aSco += 10 - L;
          else rSco += 10 - L;
        }
        // console.log(info, result, aSco, rSco, L, i, n);
        // console.log(i, L);
        DFS(L + 1, n - i, aSco, rSco);
      }
    }
  };

  DFS(0, n, 0, 0);

  return result;
};

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
// console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
// console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
// console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));
// 0504 흑흑
