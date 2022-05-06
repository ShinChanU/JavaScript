const solution2 = (N, stages) => {
  let answer = [];

  let tmp = Array.from({ length: N + 2 }, () => 0);
  stages.map((e) => tmp[e]++);

  let fail = {};
  let sum = tmp.reduce((a, b) => a + b, 0);
  for (let i = 1; i < tmp.length - 1; i++) {
    let per = tmp[i] / sum;
    if (sum === 0) {
      per = 0;
    }
    sum -= tmp[i];
    fail[`${i}`] = {
      cnt: tmp[i],
      per,
    };
  }

  let perArr = [];

  for (let idx in fail) {
    perArr.push(fail[idx].per);
  }
  perArr.sort().reverse();
  answer = perArr.map((e) => {
    for (let idx in fail) {
      if (fail[idx].per === e) {
        fail[idx].per = 2;
        return Number(idx);
      }
    }
  });

  return answer;
};

function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    console.log(reach);
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  console.log(result);
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
// console.log(solution(4, [4, 4, 4, 4, 4]));
// console.log(solution(3, [1, 1, 1]));
// 0506 40분 pass, obj 보다 이중배열이 나을듯([idx, failPercent]), 그리고 sort로 a[1], b[1]로 계산하고 출력은 x[0] 하면되니까.
