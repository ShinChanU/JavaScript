const solution = (budget, arr) => {
  // 모든 경우를 탐색해야함
  let result = [];
  let cnt = 0;

  const hapSort = arr.sort((a, b) => {
    return a[0] + a[1] - (b[0] + b[1]);
  });

  for (let i = 0; i < hapSort.length; i++) {
    cnt = 0;
    let tmp = budget;
    let disCnt = hapSort[i][0] / 2 + hapSort[i][1];

    if (tmp - disCnt >= 0) {
      tmp -= disCnt;
      cnt++;
      for (let j = 0; j < hapSort.length; j++) {
        if (i === j) continue;
        let val = hapSort[j][0] + hapSort[j][1];
        if (tmp - val >= 0) {
          tmp -= val;
          cnt++;
        }
      }
    }

    result.push(cnt);
  }

  return Math.max(...result);
};

console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
  ])
);

// 0320 강의 보고 수정
