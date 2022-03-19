const solution = (arr) => {
  let answer = [];
  let x = 0;
  let y = 0;
  let cnt = 0;

  for (let k = 1; k <= arr[0].length; k++) {
    for (let s = 1; s <= arr[0].length; s++) {
      cnt = 0;
      for (let i = 0; i < arr.length; i++) {
        x = arr[i].indexOf(k);
        y = arr[i].indexOf(s);
        if (x < y) cnt++;
      }
      if (cnt === arr.length) {
        answer.push([k, s]);
      }
    }
  }

  return answer.length;
};

// ex. a시험에서 3번 학생이 1등 4번 학생이 2등..[1등, 2등, ...]
const a = [3, 4, 1, 2];
const b = [4, 3, 2, 1];
const c = [3, 1, 4, 2];

console.log(solution([a, b, c]));

// 0318 done.

const solution2 = (test) => {
  let answer = 0;
  m = test.length; // 행 길이
  n = test[0].length; // 열 길이
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          // indexOf를 사용하지 않음
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }

  return answer;
};

// ex. a시험에서 3번 학생이 1등 4번 학생이 2등..[1등, 2등, ...]
console.log(solution2([a, b, c]));

// 0318. 강의 풀이 방식
