// 냅색 알고리즘
const solution = (arr, m) => {
  let answer;
  let dy = Array.from({ length: m + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    dy[arr[i]] = 1;
  }

  for (let i = 1; i <= m; i++) {
    if (dy[i] !== 0) continue;
    else {
      let min = Number.MAX_SAFE_INTEGER;
      for (let j = i - 1; j >= Math.ceil(i / 2); j--) {
        min = Math.min(min, dy[j] + dy[i - j]);
      }
      dy[i] = min;
    }
  }

  answer = dy[m];

  return answer;
};

console.log(solution([1, 2, 5], 15));
console.log(solution([1, 4, 6], 15));
// 0427 study.

const solution2 = (coin, m) => {
  let answer;
  let dy = Array.from({ length: m + 1 }, () => 1000); // 큰 수로 초기화
  dy[0] = 0; // 초기값 설정

  for (let i = 0; i < coin.length; i++) {
    // 동전의 개수만큼 루프
    for (let j = coin[i]; j <= m; j++) {
      // j는 거슬러 줄 돈
      // 동전의 종류가 달라질 때마다 dy값 변경시도
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
      console.log(dy);
      // j에서 coin[i]만큼 빼주고, 비교해서 작으면 + 1(coin[i])함
    }
  }

  answer = dy[m];

  return answer;
};

// console.log(solution2([1, 2, 5], 15));
console.log(solution2([1, 4, 6], 15));
// 0427 lecture.
