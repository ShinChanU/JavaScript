const solution = (id_list, report, k) => {
  let answer = []; // id_list의 각 유저별로 처리 결과 메일을 받은 횟수

  let obj = {};
  id_list.map((e) => {
    obj[e] = {
      reporting: [],
      reported: [],
      getMails: 0,
    };
  });

  report.map((e) => {
    let [doing, done] = e.split(" ");
    if (!obj[doing].reporting.includes(done)) {
      obj[doing].reporting.push(done);
      obj[done].reported.push(doing);
    }
  });

  id_list.map((e) => {
    if (obj[e].reported.length >= k) {
      obj[e].reported.map((rep) => {
        obj[rep].getMails++;
      });
    }
  });

  id_list.map((e) => {
    answer.push(obj[e].getMails);
  });

  console.log(obj);

  return answer;
};

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);

// 0506 30분소요 pass
