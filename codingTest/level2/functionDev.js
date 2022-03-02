// 100이 되면 배포가능 단, 앞에있는 기능이 100일때 배포가 가능
const solution = (progresses, speeds) => {
  const releaseDays = [];
  progresses.map((e, i) => {
    let element = e;
    let count = 0;
    while (element < 100) {
      element = element + speeds[i];
      count++;
    }
    releaseDays.push(count);
  });

  for (let i = 0; i < releaseDays.length - 1; i++) {
    if (releaseDays[i] > releaseDays[i + 1]) {
      releaseDays[i + 1] = releaseDays[i];
    }
  }

  const result = [];
  let count = 1;
  for (let i = 0; i < releaseDays.length - 1; i++) {
    if (releaseDays[i] !== releaseDays[i + 1]) {
      result.push(count);
      count = 1;
    } else count += 1;
  }
  result.push(count);

  return result;
};

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

// 220302 done.
// 왜 stack/queue 문제일까..?
