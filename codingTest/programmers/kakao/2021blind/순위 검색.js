const solution = (info, query) => {
  const answer = [];
  const recruitData = [];

  for (let infoStr of info) {
    const [language, position, career, food, score] = infoStr.split(" ");
    recruitData.push({
      language,
      position,
      career,
      food,
      score,
    });
  }

  for (let queryStr of query) {
    const [language, position, career, foodScore] = queryStr.split(" and ");
    let cnt = 0;
    recruitData.forEach((e) => {
      if (e.language === language || language === "-")
        if (e.position === position || position === "-")
          if (e.career === career || career === "-") {
            const [food, score] = foodScore.split(" ");
            if (e.food === food || food === "-") if (+e.score >= +score) cnt++;
          }
    });
    answer.push(cnt);
  }

  return answer;
};

const combination = (obj, str, hash) => {
  const [language, position, career, food, score] = str.split(" ");
  
};

const solution2 = (info, query) => {
  const answer = [];
  const recruitData = {};

  info.forEach((infoStr) => {
    combination(recruitData, infoStr, "-");
  });

  return answer;
};

const info1 = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];
const query1 = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

console.log(solution2(info1, query1)); // result = [1, 1, 1, 1, 2, 4]
// 정확성 pass, 효율성 fail 30분
// 조합 (-를 모두 넣어서 배치), 이분탐색
