const solution = (s, t) => {
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i - j] === t) {
        answer.push(j);
        break;
      } else if (s[i + j] === t) {
        answer.push(j);
        break;
      }
    }
  }

  return answer;
};

console.log(solution("teachermode", "e"));

// 0314, O(n^2) 방식

const solution2 = (s, t) => {
  const answer = [];
  let p = 1000; // 충분히 큰 수

  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
};

console.log(solution2("teachermode", "e"));

// 0317
// O(n) 방식(강의)
// 오른쪽, 왼쪽으로 루프 2번만 하면 가능
