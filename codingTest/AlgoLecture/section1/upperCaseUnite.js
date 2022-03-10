// const solution = (str) => {
//   return str.toUpperCase();
// };

const solution = (str) => {
  return [...str]
    .map((v) => {
      // let tmp = v.charCodeAt();
      // if (tmp >= 97 && tmp <= 122) {
      //   return v.toUpperCase();
      // }
      if (v === v.toLowerCase()) {
        return v.toUpperCase();
      }
      return v;
    })
    .join("");
};

console.log(solution("ItisTimeToStudy"));

// 220309]

// String.fromCharCode(number) : number에 맞는 아스키코드 문자반환
