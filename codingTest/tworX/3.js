const solution3 = (n, plans, clients) => {
  // n: 부가서비스개수
  let answer = [];
  let money = [];
  let services = [];
  let tmp = plans.map((e) => e.split(" ").map((e) => +e));
  tmp.map((e, i) => {
    money[i] = e[0];
    services[i] = e.slice(1);
    if (i === 0) services[i] = e.slice(1);
    else services[i] = [...services[i - 1], ...e.slice(1)];
  });

  clients.map((e, i) => {
    // 클라이언트 개별 판단
    let client = e.split(" ").map((e) => +e);
    let flagM = -1;
    let flagS = -1;
    let mon = client[0];
    let ser = client.slice(1);
    if (mon > money[money.length - 1]) answer.push(0); // 요금제가 없음
    else {
      let lt = 0;
      let rt = money.length - 1;
      while (lt < rt) {
        // 요금제 찾기
        let mid = Math.floor((lt + rt) / 2); // ex1. 1
        if (money[mid] >= mon) {
          rt = mid;
        } else {
          lt = mid + 1;
        }
      }
      flagM = rt + 1;
      for (let i = 0; i < services.length; i++) {
        // 서비스 찾기(요금제별)
        let temp = true;
        let arr = services[i];
        for (let x of ser) {
          if (!arr.includes(x)) temp = false;
        }
        if (temp) {
          flagS = i + 1;
          break;
        }
      }
      if (flagS === -1) answer.push(0);
      else {
        answer.push(Math.max(flagS, flagM));
      }
    }
  });

  return answer;
};

// console.log(
//   solution3(
//     5,
//     ["100 1 3", "500 4", "2000 5"],
//     ["300 3 5", "1500 1", "100 1 3", "50 1 2"]
//   )
// );
// console.log(
//   solution3(4, ["38 2 3", "394 1 4"], ["10 2 3", "300 1 2 3 4", "500 1"])
// );

// 조건 범위가 큼, 이분탐색 해야할 수도
