const arr = [];

const recur = (n) => {
  if (n < 1) return;
  else {
    arr.push(n);
    recur(n - 1);
  }
};

const solution = (n) => {
  recur(n);
  return arr.reverse();
};

// 0417 study

console.log(solution(3)); // output: 1 2 3

const solution2 = (n) => {
  const DFS = (L) => {
    // 재귀함수 이름
    if (L == 0) return; // 종료
    else {
      DFS(L - 1);
      console.log(L); // 밑에다 둬야 1, 2, 3 출력
    }
  };

  DFS(n);
};

solution2(3);

// 0417 lecture
