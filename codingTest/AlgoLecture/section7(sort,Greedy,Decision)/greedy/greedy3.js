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

const solution2 = (arr) => {
  let answer = 0;
  let cnt = 0;

  let tmp = [];
  for (let x of arr) {
    tmp.push([x[1], "e"]);
    tmp.push([x[0], "s"]);
  }

  tmp.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i][1] === "e") cnt--;
    if (tmp[i][1] === "s") {
      cnt++;
      if (answer < cnt) answer = cnt;
    }
  }

  return answer;
};

console.log(
  solution2([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);

// 0416 lecture 들어야함
