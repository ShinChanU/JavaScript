// Hash 인 이유..?
const solution = (str) => {
  let answer = 0;
  let a = {
    upper: "A",
    cnt: 0,
  };
  let b = {
    upper: "B",
    cnt: 0,
  };
  let c = {
    upper: "C",
    cnt: 0,
  };
  let max = a;

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        a.cnt++;
        break;
      case "B":
        b.cnt++;
        break;
      case "C":
        c.cnt++;
        break;
      default:
        "";
    }
  }

  if (a.cnt < b.cnt) {
    max = b;
  } else if (max.cnt < c.cnt) {
    max = c;
  }

  return max.upper;
};

console.log(solution("BACBACCACCBDEDE"));

// 0328 done.

// javascript Map 자료구조 사용 (get, set, has, value, keys... )
const solution2 = (str) => {
  let max = 0;
  let sH = new Map();

  for (let i = 0; i < str.length; i++) {
    if (sH.has(str[i])) sH.set(str[i], sH.get(str[i]) + 1);
    else sH.set(str[i], 1);
  }

  // 내가 푼 풀이 (짧지만 가독성)
  // max = Math.max(...sH.values());
  // return [...sH.keys()][[...sH.values()].indexOf(max)];

  // 강의에서 푼 풀이 (for)
  let answer;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
};

console.log(solution2("BACBACCACCBDEDE"));

// 0328 done.
