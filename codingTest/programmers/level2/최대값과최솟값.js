const solution = (s) => {
  const arr = s.split(" ").map((e) => +e);
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
};

const s1 = "1 2 3 4";
const s2 = "-1 -2 -3 -4";
const s3 = "-1 -1";

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
