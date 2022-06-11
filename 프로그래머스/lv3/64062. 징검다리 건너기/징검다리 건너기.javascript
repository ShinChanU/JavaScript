const solution = (stones, k) => {
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