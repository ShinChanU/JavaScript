const solution = (arr) => {
  let answer = [];

  arr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < arr.length; i++) {
    let cnt = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i][0] >= arr[j][1]) continue;
      if (arr[i][1] <= arr[j][0]) continue;
      cnt++;
    }
    answer.push(cnt);
  }

  return Math.max(...answer);
};

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);

// 0413 study
