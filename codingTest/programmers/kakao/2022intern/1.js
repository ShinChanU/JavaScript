const solution = (survey, choices) => {
  let answer = "";
  let score = [];
  let obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  let n = choices.length;

  for (let i = 0; i < n; i++) {
    let [x, y] = survey[i].split("");
    let cho = choices[i];
    let sco = Math.abs(cho - 4);
    if (cho < 4) {
      obj[x] += sco;
    } else if (cho > 4) {
      obj[y] += sco;
    }
  }
  score.push(obj.R >= obj.T ? "R" : "T");
  score.push(obj.C >= obj.F ? "C" : "F");
  score.push(obj.J >= obj.M ? "J" : "M");
  score.push(obj.A >= obj.N ? "A" : "N");

  answer = score.join("");

  return answer;
};

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
// 25분 pass, 실제 코테에서 풀이
