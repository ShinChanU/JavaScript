const solution = (brown, yellow) => {
  let answer = [];
  let rl,
    cl = 0;
  let sum = (brown + 4) / 2;

  for (rl = 3; rl <= sum - 3; rl++) {
    cl = sum - rl;
    if (cl < rl) break;
    if (rl * cl - brown === yellow) answer = [cl, rl];
  }

  return answer;
};

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));

// 0501 30분 소요, pass, 완전탐색인지는 모르겠음.
