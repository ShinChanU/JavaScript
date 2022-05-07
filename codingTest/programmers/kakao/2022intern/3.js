const solution = (alp, cop, problems) => {
  let answer = 0; // 최단 시간
  let maxX = -1;
  let maxY = -1;

  for (let [x, y] of problems) {
    maxX = maxX < x ? x : maxX;
    maxY = maxY < y ? y : maxY;
  }
  let gap = [maxX - alp, maxY - cop];
  if (gap[0] < 0 && gap[1] < 0) return 0;

  problems.sort((a, b) => {
    return a[0] + a[1] - (b[0] + b[1]);
  });

  const alUp = (n, flag) => {
    // 부족한 점수
    if (flag) {
      // 코딩력은 되는데 알고력이 부족
    } else {
    }
    console.log("al", n);
  };

  const coUp = (n, flag) => {
    // 부족한 점수
    if (flag) {
      // 알고력은 되는데 코딩력이 부족
    } else {
    }
  };

  for (let [a, c, getX, getY, cost] of problems) {
    console.log(alp, cop, a, c);
    let flatA = 0;
    let flatC = 0;
    if (alp >= a) {
      flatA = 1;
    }
    if (cop >= c) {
      flatC = 1;
    }
    if (alp < a) {
      alUp(a - alp, flatC);
    }
    if (cop < c) {
      coUp(c - cop, flatA);
    }
  }

  return answer;
};

console.log(
  solution(10, 10, [
    [10, 15, 2, 1, 2],
    [20, 20, 3, 3, 4],
  ])
);
console.log(
  solution(0, 0, [
    [0, 0, 2, 1, 2],
    [4, 5, 3, 1, 2],
    [4, 11, 4, 0, 2],
    [10, 4, 0, 4, 2],
  ])
);
// 1시간 stop.
