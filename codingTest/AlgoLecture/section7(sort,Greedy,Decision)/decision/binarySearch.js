const solution = (m, arr) => {
  let answer;

  arr.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    let idx = Math.floor((start + end) / 2);
    if (m === arr[idx]) {
      answer = idx + 1;
      break;
    } else if (m < arr[idx]) end = end - idx - 1;
    else start = start + idx + 1;
  }

  return answer;
};

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));

// 0416 study

const solution2 = (target, arr) => {
  let answer;

  arr.sort((a, b) => a - b);

  let lt = 0;
  let rt = arr.length - 1;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (target === arr[mid]) {
      answer = mid + 1;
      break;
    } else if (target < arr[mid]) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
};

console.log(solution2(32, [23, 87, 65, 12, 57, 32, 99, 81]));
