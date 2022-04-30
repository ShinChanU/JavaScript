const solution = (num) => {
  let answer = 0;
  let arr = num.split("");
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0);

  const isPrime = (str) => {};

  const DFS = (L, str) => {
    if (L === n) {
      isPrime(str);
      console.log(str);
      return;
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          DFS(L + 1, str + arr[i]);
          ch[i] = 0;
        }
      }
    }
  };

  DFS(0, "");

  return answer;
};

console.log(solution("17"));
console.log(solution("011"));
