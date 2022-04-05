const solution = (s1, s2) => {
  let answer = true;
  let queue1 = [...s1];
  let queue2 = [...s2];

  while (queue2.length) {
    if (queue1[0] === queue2[0]) {
      queue1.shift();
      queue2.shift();
    } else {
      queue2.shift();
    }
  }

  if (queue1.length !== 0) answer = false;

  return answer;
};

console.log(solution("CBA", "CBDAGE"));
console.log(solution("CBA", "CGEADB"));

// 0405 study.

const solution2 = (s1, s2) => {
  let answer = true;
  let queue = [...s1];

  for (let x of s2) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return false;
    }
  }

  if (queue.length !== 0) answer = false;

  return answer;
};

console.log(solution2("CBA", "CBDAGE"));
console.log(solution2("CBA", "CGEADB"));

// 0405 lecture.
