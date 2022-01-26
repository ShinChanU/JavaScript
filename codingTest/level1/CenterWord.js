'use strict';

const solution = (s) => {
  let answer = '';
  let wordLen = s.length;

  if (wordLen % 2 === 0) {
    let a = s[wordLen / 2 - 1];
    let b = s[wordLen / 2];
    answer = `${a}${b}`
  } else {
    answer = s[Math.floor(wordLen / 2)];
  }

  return answer;
};

console.log(solution("qwer"));