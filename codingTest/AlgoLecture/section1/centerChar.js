const solution = (str) => {
  const len = str.length;
  if (len % 2 === 0) {
    return str[len / 2 - 1] + str[len / 2];
  } else {
    return str[Math.floor(len / 2)];
  }
};

console.log(solution("good"));

// 220310
