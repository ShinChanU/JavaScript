const solution = (arr) => {
  let min = Number.MIN_SAFE_INTEGER;
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

      if (min <= sum) {
        min = sum;
        answer = arr[i];
      }
    });

  return answer;
};

console.log(solution([128, 460, 603, 40, 521, 137, 123]));

// 0317
