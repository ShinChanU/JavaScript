// 결정 알고리즘(이분 탐색)
const solution = (m, arr) => {
  let answer = 0;

  arr.sort((a, b) => a - b);
  let lt = arr[arr.length - 1]; // dvd 길이 최소값 (최대 원소 하나)
  let rt = arr.reduce((a, b) => a + b); // 최대값 (모두 합)

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    let hap = 0;
    let cnt = 0;

    for (let x of arr) {
      hap += x;
      if (hap > mid) {
        cnt++;
        hap = x;
      }
    }
    if (hap <= mid) cnt++;

    if (cnt <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
};

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 0416 study

const count = (arr, capacity) => {
  let cnt = 1; // dvd 한장 있음
  let hap = 0;

  for (let x of arr) {
    if (hap + x > capacity) {
      cnt++;
      hap = x;
    } else hap += x;
  }

  return cnt;
};

const solution2 = (m, arr) => {
  let answer = 0;

  arr.sort((a, b) => a - b);
  let lt = Math.max(...arr);
  let rt = arr.reduce((a, b) => a + b);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(arr, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }

  return answer;
};

console.log(solution2(3, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // 이 순서대로 넘어온거임(정렬X)

// 0416 lecture
