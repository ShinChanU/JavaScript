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
