// const solution = (str) => {
//   return str.match(/[A-Z]/g).length;
// };

const solution = (str) => {
  let count = 0;
  [...str].map((v) => {
    // if (v.charCodeAt() >= 65 && v.charCodeAt() <= 90) count++;
    if (v === v.toUpperCase()) count++; // 강의 보고 수정
  });
  return count;
};

console.log(solution("KoreaTimeGood"));

// 220309
