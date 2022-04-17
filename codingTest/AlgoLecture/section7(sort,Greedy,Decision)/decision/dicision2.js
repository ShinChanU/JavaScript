const count = (arr, capacity) => {
  let cnt = 1;
  let a = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - a >= capacity) {
      cnt++;
      a = arr[i];
    }
  }

  return cnt;
};

const solution = (m, arr) => {
  let answer = 0;

  arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 1; i++) {
    let gap = Math.abs(arr[i] - arr[i + 1]);
    if (min > gap) min = gap;
  }
  let lt = min; // 거리니까 1로 초기화 해도 됨
  let rt = arr[arr.length - 1] - arr[0]; // 그냥 맽끝자리로 해도됨

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (m > count(arr, mid)) rt = mid - 1;
    else {
      answer = mid;
      lt = mid + 1;
    }
  }

  return answer;
};

console.log(solution(3, [1, 2, 8, 4, 9]));
// 0416 study, lecture PERFECT !!!

// 어려움, 정리 필요 !
