// const solution = (n, str) => {
//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === i) result.push(str[i]);
//   }
//   return result;
// };

// 강의 보고 작성 0310
const solution = (n, str) => {
  let answer;
  answer = str.filter(
    (e, i) =>
      // if (str.indexOf(e) === i) return true; // filter는 참의 경우 value만 리턴
      str.indexOf(e) === i //  이르케 쓰면됨
  );
  return answer;
};

console.log(solution(5, ["good", "time", "good", "time", "student"]));

// 220310
