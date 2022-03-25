const solution = (str) => {
  let answer = 0;
  let a = 0;
  let b = 0;
  let c = 0;

  for (let i = 0; i < str.length; i++) {
    switch (i) {
      case "A":
        a++;
        break;
      case "B":
        b++;
        break;
      case "C":
        c++;
        break;
      default:
        return;
    }
  }

  return a;
};

console.log(solution("BACBACCACCBDEDE"));

// 0325 doing
