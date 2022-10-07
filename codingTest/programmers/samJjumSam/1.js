const solution = (student) => {
  let answer;

  const score = student.map((e, i) => {
    let sum = 10;
    let cntA = (e.match(/A/g) || []).length;
    let cntL = (e.match(/L/g) || []).length;
    let cntP = (e.match(/P/g) || []).length;
    cntP += Math.floor(cntL / 2);
    if (cntP >= 3) {
      // 최종 0점
      sum = 0;
    } else {
      sum += cntA;
      sum -= cntP;
    }
    return [sum, i + 1];
  });

  answer = score
    .sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      else return b[0] - a[0];
    })
    .map((e) => e[1]);

  return answer;
};

const student1 = ["AAALLLAPAA", "AAAAAAAPPP", "ALAAAAPAAA"];
const student2 = ["ALALLAAPAA", "ALLLAAAPAA", "APAPALLAAA"];

console.log(solution(student1)); // [3, 1, 2]
console.log(solution(student2)); // [1, 2, 3]
// 30분 pass
// 정규식, 조건부 정렬
