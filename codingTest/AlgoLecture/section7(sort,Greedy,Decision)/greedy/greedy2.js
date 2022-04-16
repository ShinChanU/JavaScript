const solution = (arr) => {
  let answer = [];

  arr.sort((a, b) => a[0] - b[0]);
  console.log(arr);

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

// 0416 lecture 끝나는 시간을 기준으로 greedy

const solution2 = (arr) => {
  let answer = 0;

  arr.sort((a, b) => {
    // 끝나는 시간이 같을 경우에는 시작시간으로 정렬
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  console.log(arr);

  let et = 0;
  for (let x of arr) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }

  return answer;
};

console.log(
  solution2([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);

console.log(
  solution2([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
