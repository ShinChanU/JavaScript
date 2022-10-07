const solution = (orders) => {
  let answer;
  let n = orders.length;
  let half = Math.ceil(n / 2);
  let score = Array.from({ length: n }, (e, i) => [i, 0]);
  let except = [];

  let cnt = 1;
  while (1) {
    orders.forEach((e, i) => {
      let j = 0;
      while (1) {
        if (except.indexOf(e[j]) === -1) {
          score.forEach((e1) => {
            if (e1[0] === e[j]) e1[1]++;
          });
          break;
        }
        j++;
      }
    });

    score.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else b[1] - a[1];
    });

    let select = score.filter((e) => {
      return e[1] >= half;
    });

    if (select.length) {
      let tmp = select.pop();
      answer = [cnt, tmp[0]];
      break;
    } else {
      except.push(score.shift()[0]);
      score = score.map((e) => [e[0], 0]);
    }

    cnt++;
  }

  return answer;
};

const orders1 = [
  [2, 3, 4, 0, 1],
  [1, 4, 3, 2, 0],
  [4, 1, 0, 2, 3],
  [3, 2, 1, 4, 0],
  [0, 3, 2, 1, 4],
];
const orders2 = [
  [2, 1, 0, 3],
  [3, 2, 0, 1],
  [3, 0, 2, 1],
  [2, 3, 0, 1],
];
const orders3 = [
  [2, 0, 1, 3, 4, 5],
  [0, 1, 2, 3, 4, 5],
  [1, 0, 2, 3, 4, 5],
  [3, 1, 2, 3, 4, 5],
  [4, 1, 2, 3, 4, 5],
  [5, 1, 2, 3, 4, 5],
];

console.log(solution(orders1)); // [4, 3]
// console.log(solution(orders2)); // [1, 3]
// console.log(solution(orders3)); // [1, 3]
