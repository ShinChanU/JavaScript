const solution = (n) => {
  const DFS = (n) => {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      console.log(n % 2);
    }
  };

  DFS(n);
};

solution(11);

// 0417 study

const solution2 = (n) => {
  let answer = "";

  const DFS = (n) => {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += n % 2;
    }
  };

  DFS(n);

  return answer;
};

console.log(solution2(11));

// 0417 lecture
