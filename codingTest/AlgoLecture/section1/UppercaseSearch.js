// const solution = (str) => {
//   return str.match(/[A-Z]/g).length;
// };

const solution = (str) => {
  let count = 0;
  [...str].map((v) => {
    if (v.charCodeAt() >= 65 && v.charCodeAt() <= 90) count++;
  });
  return count;
};

console.log(solution("KoreaTimeGood"));

// 220309
