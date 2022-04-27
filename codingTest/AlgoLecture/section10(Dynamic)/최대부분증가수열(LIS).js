/*
내가 푼 풀이
dy[1]~dy[n-1] 를 구하는데, arr[i]가 가장 마지막 항이 되는 수열의 최대 길이를 작성
수열의 길이를 구하는데 DFS를 사용
*/
const solution = (arr) => {
  let answer;
  let n = arr.length;
  let dy = Array.from({ length: n }, () => 0);
  dy[0] = 1;

  for (let i = 1; i < n; i++) {
    let tmp = arr.slice(0, i + 1);
    let end = tmp[tmp.length - 1];
    let max = Number.MIN_SAFE_INTEGER;

    const DFS = (L, x, idx) => {
      if (x === end) {
        if (max < L) max = L;
        return;
      } else {
        for (let i = idx; i < tmp.length; i++) {
          if (x < arr[i]) {
            DFS(L + 1, arr[i], i);
          }
        }
      }
    };
    DFS(0, 0, 0);
    dy[i] = max;
  }

  console.log(dy);
  answer = Math.max(...dy);

  return answer;
};

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));

/*
강의 풀이
dy[i]를 구하는데, i보다 작은 값들을 탐색하고 앞에 붙을 수 있는 수를 구함
그 수 의 dy 배열값 중 가장 큰 값 + 1 하면됨, 이해가 중요
*/
const solution2 = (arr) => {
  let answer = 0;
  let n = arr.length;
  let dy = Array.from({ length: n }, () => 0);
  dy[0] = 1;

  for (let i = 1; i < n; i++) {
    let tmp = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && tmp < dy[j]) tmp = dy[j];
    }
    dy[i] = tmp + 1;
    answer = Math.max(answer, dy[i]);
  }

  console.log(dy);

  return answer;
};

console.log(solution2([5, 3, 7, 8, 6, 2, 9, 4]));
