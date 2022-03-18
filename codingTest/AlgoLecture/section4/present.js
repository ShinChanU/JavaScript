const solution = (budget, arr) => {
  let answer = 0;
  let total = [];
  let temp = []; // [[합, 할인합], ]

  arr.map((e) => {
    temp.push(e[0] + e[1]);
    temp.push(e[0] / 2 + e[1]);
    total.push(temp);
    temp = [];
  });

  while (budget > 0) {
    let min = Number.MAX_SAFE_INTEGER;
    let index = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < total.length; i++) {
      if (min > total[i][1]) {
        index = i;
        min = total[i][1];
        // realHap = total[i][0];
      }
    }

    if (budget - total[index][0] < 0) {
      for (let j = 0; j < total.length; j++) {
        if (budget - total[j][1] >= 0) {
          budget -= total[j][1];
          total.splice(j, 1);
          answer++;
          break;
        }
      }
    } else {
      budget -= total[index][0];
      total.splice(index, 1);
      answer++;
    }
  }

  return answer;
};

const a = [6, 6];
const b = [2, 2];
const c = [4, 3];
const d = [4, 5];
const e = [10, 3];

console.log(solution(28, [a, b, c, d, e]));

// 0318 done
