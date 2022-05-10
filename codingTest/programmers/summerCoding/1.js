const solution = (atmos) => {
  let result = 0; // 마스크 구매 개수
  // 미세: 81~150 나쁨, 151~ 매우나쁨
  // 초미세: 36~75 나쁨, 76~ 매우나쁨
  mask = 0; // 마스크 없음

  for (let [mi, choMi] of atmos) {
    if (mask === 3) mask = 0;
    let miStatus = 0;
    let choMiStatus = 0;
    if (80 < mi && mi < 151) {
      // 미세 나쁨
      miStatus = 1;
    }
    if (151 <= mi) {
      miStatus = 2;
    }
    if (35 < choMi && choMi < 76) {
      // 미세 나쁨
      choMiStatus = 1;
    }
    if (76 <= choMi) {
      choMiStatus = 2;
    }
    if (miStatus < 1 && choMiStatus < 1) {
      if (mask >= 1) mask++;
      continue;
    }
    if (miStatus === 2 && choMiStatus === 2) {
      if (mask === 0) {
        result++;
      }
      mask = 0;
    } else {
      if (mask === 3) {
        result++;
        mask = 1;
      } else {
        if (mask === 0) result++;
        mask++;
      }
    }
  }

  return result;
};

console.log(
  solution([
    [80, 35],
    [70, 38],
    [100, 41],
    [75, 30],
    [160, 80],
    [77, 29],
    [181, 68],
    [151, 76],
  ])
);
console.log(
  solution([
    [140, 90],
    [177, 75],
    [95, 45],
    [71, 31],
    [150, 30],
    [80, 35],
    [72, 33],
    [166, 81],
    [151, 75],
  ])
);
console.log(
  solution([
    [30, 15],
    [80, 35],
  ])
);
