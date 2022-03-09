// const solution = (str) => {
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
