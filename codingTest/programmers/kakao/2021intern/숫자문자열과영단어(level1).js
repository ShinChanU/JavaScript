const numObj = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const solution = (s) => {
  let answer = "";
  let tmp = "";
  const regex = /[0-9]/g;

  for (let x of s) {
    if (x.match(regex) !== null) {
      answer += x;
    } else {
      tmp += x;
      if (numObj[tmp] !== undefined) {
        answer += numObj[tmp];
        tmp = "";
      }
    }
  }

  return parseInt(answer);
};

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));
