const solution = (stones, k) => {
  let result = 0;
  let cnt = 0;
  let n = stones.length;

  while (1) {
    for (let i = 0; i < n; i++) {
      if (stones[i] !== 0) {
        stones[i]--;
        cnt = 0;
      } else {
        cnt++;
        let x = 1;
        while (1) {
          if (stones[i + x] !== 0 || i + x >= n) {
            cnt = 0;
            break;
          } else {
            cnt++;
            x++;
            if (cnt === k) break;
          }
        }
        if (cnt === k) break;
      }
    }
    if (cnt === k) break;
    result++;
  }

  return result;
};

// console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); // 3
// 0504 59% pass

// 이번엔 이분 탐색 해보자
const solution2 = (stones, k) => {
  let lt = 0;
  let rt = 200000000;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    let cnt = 0;
    for (let el of stones) {
      if (el - mid <= 0) {
        cnt++;
      } else {
        cnt = 0;
      }
      if (cnt === k) break;
    }

    if (cnt === k) rt = mid - 1;
    else lt = mid + 1;
  }

  return lt;
};

console.log(solution2([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); // 3
// 0504 구글링,,의 힘.. 왜 이건 pass가 될까..
