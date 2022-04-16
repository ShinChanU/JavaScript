const numObj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const solution = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) === NaN) {
      // let tmp = "";
      // for (let j = i; j < s.length; j++) {
      //   // tmp = concat(...tmp, s[i]);
      //   console.log(tmp);
      // }
    }
    console.log(typeof s[i]);
  }
};

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));
