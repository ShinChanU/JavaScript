const solution = (a) => {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      sum += 1;
      let j = i - 1;
      while (j >= 0) {
        if (a[j] === 1) {
          sum += 1;
          j--;
        } else break;
      }
    }
  }

  return sum;
};

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

// 0312

const solution2 = (a) => {
  let sum = 0;
  let cnt = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      cnt++;
    } else if (a[i] === 0) {
      cnt = 0;
    }
    sum += cnt;
  }

  return sum;
};

console.log(solution2([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

// 0313
