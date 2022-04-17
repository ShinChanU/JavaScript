const solution = (n) => {
  let answer = [];

  const DFS = (v, answer) => {
    if (v === n + 1) {
      console.log(answer);
      return;
    } else {
      answer.push(v);
      DFS(v + 1, answer);
      answer.pop();
      DFS(v + 1, answer);
    }
  };

  DFS(1, answer);
};

console.log(solution(3));

// 0417 study.

const solution2 = (n) => {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0); // 체크 배열 생성

  const DFS = (v) => {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i < ch.length; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim()); // string 공백 제거
      return;
    } else {
      ch[v] = 1; // 집합에 포함
      DFS(v + 1);
      ch[v] = 0; // 집합에 포함 X
      DFS(v + 1);
    }
  };

  DFS(1);

  return answer;
};

console.log(solution2(3));

// 0417 lecture.
