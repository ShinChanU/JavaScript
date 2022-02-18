const solution = (s, n) => {
  // 97-122 65-90 32

  let result = s.split("").map((e) => {
    if (e === " ") return e;
    let ascii = e.charCodeAt();
    if (97 <= ascii && ascii <= 122) {
      if (ascii + n > 122) {
        return String.fromCharCode(ascii + n - 26);
      }
      return String.fromCharCode(ascii + n);
    } else if (65 <= ascii && ascii <= 90) {
      if (ascii + n > 90) {
        return String.fromCharCode(ascii + n - 26);
      }
      return String.fromCharCode(ascii + n);
    }
  });

  return result.join("");
};

console.log(solution("a B z", 4));

// 0218 done.
