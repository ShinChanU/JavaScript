const solution = (arr) => {
  let answer = [];

  arr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < arr.length - 1; i++) {
    let tmp = arr[i];
    let cnt = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (tmp[1] <= arr[j][0]) {
        cnt++;
        tmp = arr[j];
      }
    }
    answer.push(cnt);
  }

  return Math.max(...answer);
};

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
); // output 3

console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
); // output 2

// 0413 study
