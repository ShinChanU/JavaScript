const solution = (arr) => {
  let answer = "NO";
  let ch = Array.from({ length: arr.length }, () => 0);

  const DFS = (v) => {
    if (v >= arr.length) {
      let sum1 = 0;
      let sum2 = 0;
      for (let i = 0; i < ch.length; i++) {
        if (ch[i] === 1) sum1 += arr[i];
        else sum2 += arr[i];
      }
      if (sum1 === sum2) answer = "YES";
      return;
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  };

  DFS(0);

  return answer;
};

console.log(solution([1, 3, 5, 6, 7, 10]));
// 두개의 부분집합으로 나누어서 합이 같은 경우가 존재하면 YES, 아님 NO

// 0418 study

const solution2 = (arr) => {
  let answer = "NO";
  let flag = 0; // flag 지정해두면 좋음
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;

  const DFS = (L, sum) => {
    if (flag) return;
    // L: 레벨
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]); // 더하면서 진행
      DFS(L + 1, sum); // 더하지 않고 진행
    }
  };

  DFS(0, 0);

  return answer;
};
console.log(solution2([1, 3, 5, 6, 7, 10]));
// 부분집합을 가지를 뻗어서 가지만 매개변소로 sum을 넘겨주는게 핵심!
// 0418 lecture
