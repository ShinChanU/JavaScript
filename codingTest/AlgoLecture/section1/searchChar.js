const solution = (str, char) => {
  let count = 0;
  [...str].map((v) => {
    if (v === char) count++;
  });
  return count;
};

// const solution = (str, char) => {
//   const regex = new RegExp(`${char}`, "g"); // 변수, 플래그
//   // const regex = /R/g;
//   const result = str.match(regex).length;
//   return result;
// };

console.log(solution("COMPUTERPROGRAMMING", "R"));
