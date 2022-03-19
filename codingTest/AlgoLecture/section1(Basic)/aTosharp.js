// const solution = (str) => {
//   // let answer = str // 얉은 복사, string은 값만, 배열은 주소까지 복사
//   return str.replace(/A/g, "#");
// };

const solution = (str) => {
  return [...str]
    .map((v) => {
      if (v === "A") return "#";
      return v;
    })
    .join("");
};

console.log(solution("BANANA"));

// 220309
