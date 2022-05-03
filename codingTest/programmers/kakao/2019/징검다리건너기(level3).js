const solution = (stones, k) => {
  let result = 0;
  let cnt = 0;
  let n = stones.length;

  while (1) {
    if (cnt >= k) break;
    for (let i = 0; i < n; i++) {
      console.log(stones, i, result);

      if (stones[i] !== 0) stones[i]--;
      else {
        console.log("여기");
        let x = 1;
        while (1) {
          if (stones[i + x] !== 0 || i + x >= n) {
            // console.log(i, stones, "i추가");
            break;
          } else {
            // i+x 값이 0 일때
            console.log(i, x, cnt, stones);
            cnt++;
            x++;
            if (cnt === k) break;
          }
        }
        // console.log(i, stones);
      }
    }
    result++;
  }

  return result;
};

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); // 3
