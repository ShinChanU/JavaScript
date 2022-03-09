// const solution = (str) => {
//   return str.toUpperCase();
// };

const solution = (str) => {
  return [...str]
    .map((v) => {
      let tmp = v.charCodeAt();
      if (tmp >= 97 && tmp <= 122) {
        return v.toUpperCase();
      }
      return v;
    })
    .join("");
};

console.log(solution("ItisTimeToStudy"));

// 220309
