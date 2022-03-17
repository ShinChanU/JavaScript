const solution = (str) => {
  let answer = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer.push(str[i]);
      if (count !== 1) answer.push(count);
      count = 1;
    }
  }
  return answer.join("");
};

console.log(solution("KKHSSSSSSSE")); // K2HS7E

// 0315

const solution2 = (str) => {
  let answer = "";
  let count = 1;
  str += " ";
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      answer += str[i];
      if (count > 1) answer += String(count);
      count = 1;
    }
  }
  return answer;
};

console.log(solution2("KKHSSSSSSSE")); // K2HS7E

// 0317
// 강의 문제 풀이(내용은 비슷)
