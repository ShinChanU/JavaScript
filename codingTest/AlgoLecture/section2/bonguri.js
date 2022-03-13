const solution = (arr) => {
  let answer = 0;
  const result = [];
  const array = Array(arr.length + 2).fill(0);

  result.push(array);
  arr.map((e) => {
    result.push([0, ...e, 0]);
  });
  result.push(array);

  for (let i = 1; i < result.length - 1; i++) {
    for (let j = 1; j < result.length - 1; j++) {
      let top, bottom, left, right;
      top = result[i][j - 1];
      bottom = result[i + 1][j];
      left = result[i - 1][j];
      right = result[i][j + 1];
      if (result[i][j] > Math.max(top, bottom, left, right)) {
        answer++;
      }
    }
  }

  return answer;
};

const a = [5, 3, 7, 2, 3];
const b = [3, 7, 1, 6, 1];
const c = [7, 2, 5, 3, 4];
const d = [4, 3, 6, 4, 1];
const e = [8, 7, 3, 5, 2];

console.log(solution([a, b, c, d, e]));

// 0312

// 0313
// 나보다 모두 작은가를 확인하는 것보다 큰게하나라도 있는가로 파악
// dy, dx 배열을 먼저 초기화 해둠 => 상하좌우를 탐색하기 위해 필요한 인덱스
const solution2 = (arr) => {
  let answer = 0;
  const n = arr.length;
  const dx = [-1, 0, 1, 0]; // 헹, [상, 하, 우, 좌]
  const dy = [0, 1, 0, -1]; // 열
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // 탐색할 행
        let ny = j + dy[k]; // 탐색할 열
        if (nx >= 0 && nx < n && ny < n && arr[nx][ny] > arr[i][j]) {
          // nx가 -1이면 안되고, n보다도 작아야함, ny도 -1이면 안되고 n보다 작아야함
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
};

console.log(solution2([a, b, c, d, e]));
