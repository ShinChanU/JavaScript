const solution2 = (periods, payments, estimates) => {
  let answer = [0, 0]; // vip가 되는 고객수, vip에서 내려오는 고객수
  let n = periods.length;
  let nowHap = payments.map((e) => e.reduce((a, b) => a + b)); // 현재 합
  let nextHap = nowHap.slice();
  let nowVip = Array.from({ length: n }, () => 0);
  let nextVip = Array.from({ length: n }, () => 0);

  const vipCheck = (per, hapArr, vipArr) => {
    for (let i = 0; i < n; i++) {
      if (per[i] >= 24 && hapArr[i] >= 900000) vipArr[i] = 1;
      else if (per[i] >= 60 && hapArr[i] >= 600000) vipArr[i] = 1;
    }
  };

  vipCheck(periods, nowHap, nowVip);
  for (let i = 0; i < n; i++) {
    if (periods[i] >= 12) nextHap[i] -= payments[i][0];
    nextHap[i] += estimates[i];
    periods[i] += 1;
  }
  vipCheck(periods, nextHap, nextVip);

  nowVip.forEach((now, i) => {
    let next = nextVip[i];
    if (!now && next) answer[0]++;
    if (now && !next) answer[1]++;
  });

  return answer;
};

// console.log(
//   solution2(
//     [20, 23, 24],
//     [
//       [
//         100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000,
//         100000, 100000, 100000,
//       ],
//       [
//         100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000,
//         100000, 100000, 100000,
//       ],
//       [
//         350000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
//         50000, 50000,
//       ],
//     ],
//     [100000, 100000, 100000]
//   )
// );
// console.log(
//   solution2(
//     [24, 59, 59, 60],
//     [
//       [
//         50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
//         50000, 50000,
//       ],
//       [
//         50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
//         50000, 50000,
//       ],
//       [
//         350000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
//         50000, 50000,
//       ],
//       [
//         50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
//         50000, 50000,
//       ],
//     ],
//     [350000, 50000, 40000, 50000]
//   )
// );
