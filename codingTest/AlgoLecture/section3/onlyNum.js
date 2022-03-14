// loop
const solution = (str) => {
  let num;
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    num = Number(str[i].charAt());
    if (num >= 0 && num <= 9) answer.push(num);
  }

  return Number(answer.join(""));
};

// regex
const solution2 = (str) => {
  return Number(str.match(/[0-9]/g).join(""));
};

console.log(solution("g0en2T0s8eSoft"));
console.log(solution2("g0en2T0s8eSoft"));

// 0314
