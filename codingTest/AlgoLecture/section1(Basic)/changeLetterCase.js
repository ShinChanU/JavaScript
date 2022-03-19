const solution = (str) => {
  return [...str]
    .map((e) => {
      let asc = e.charCodeAt();
      if (asc >= 65 && asc <= 90) {
        return e.toLowerCase();
      } else if (asc >= 97 && asc <= 122) {
        return e.toUpperCase();
      }
    })
    .join("");
};

// const solution = (str) => {
//   let tmp = str.replace(/[a-z]/g, (e) => {
//     return e.toUpperCase();
//   });

//   tmp = str.replace(/[A-Z]/g, (e) => e.toLowerCase());

//   return tmp;
// };

console.log(solution("StuDY"));

//0309
