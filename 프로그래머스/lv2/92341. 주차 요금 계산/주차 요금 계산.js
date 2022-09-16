const solution = (fees, records) => {
  let parking = {};
  let stack = [];
  const [basicT, basicP, addT, addP] = fees;

  // 출입 시간 계산
  for (let i = 0; i < records.length; i++) {
    const [time, num, inOut] = records[i].split(" ");
    if (inOut === "IN") {
      stack.push(num);
      if (parking[num]) {
        parking[num].time = time;
      } else {
        parking[num] = { time, price: 0, sumTime: 0 };
      }
    } else {
      stack.splice(stack.indexOf(num), 1);
      let [inTimeH, inTimeM] = parking[num].time.split(":");
      let [outTimeH, outTimeM] = time.split(":");
      let calcH = outTimeH - inTimeH;
      let calcM = outTimeM - inTimeM;
      if (calcM < 0) {
        calcH -= 1;
        calcM = 60 + calcM;
      }
      let totalStayTime = calcH * 60 + calcM;
      parking[num].sumTime += totalStayTime;
    }
  }

  // 아직 있는 차들 시간 계산
  if (stack) {
    stack.forEach((e) => {
      const [hour, min] = parking[e].time.split(":");
      let sum = (23 - hour) * 60 + 59 - min;
      parking[e].sumTime += sum;
    });
  }

  // 가격 계산
  let result = Object.keys(parking)
    .map((num) => {
      let time = parking[num].sumTime;
      if (time <= basicT) return [+num, basicP];
      else {
        time -= basicT;
        return [+num, basicP + Math.ceil(time / addT) * addP];
      }
    })
    .sort((a, b) => {
      return a[0] - b[0];
    })
    .map((e) => e[1]);

  return result;
};