const solution = (arr) => {
  let max = Number.MIN_SAFE_INTEGER;
  let answer = 0;

  arr
    .sort((a, b) => a - b)
    .map((e, i) => {
      let tmp = 0;
      let sum = 0;

      while (e > 0) {
        tmp = e % 10;
        e = (e - tmp) / 10;
        sum += tmp;
      }

      if (max <= sum) {
        max = sum;
        answer = arr[i];
      }
    });

  return answer;
};

console.log(solution([128, 460, 603, 40, 521, 137, 123]));

// 0317

const solution2 = (arr) => {
  let max = Number.MIN_SAFE_INTEGER;
  let answer = 0;

  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
};

console.log(solution2([128, 460, 603, 40, 521, 137, 123]));

// 0317
// 강의 풀이 방법, 내장함수 사용
