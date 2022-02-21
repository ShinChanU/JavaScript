const solution = (string, n) => {
  string.sort();

  for (let i = 0; i < string.length - 1; i++) {
    for (let j = 0; j < string.length - (i + 1); j++) {
      let temp = "";
      if (string[j][n] > string[j + 1][n]) {
        temp = string[j + 1];
        string[j + 1] = string[j];
        string[j] = temp;
      }
    }
  }

  return string;
};

function solution2(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

// console.log(solution(["sun", "bed", "car", "bar"], 1));
console.log(solution(["abce", "abcd", "cdx", "abca"], 2));

console.log(solution2(["sun", "car", "bed"], 1));

// ex. const array = [1, 2, 3, 4]
// array.sort((a, b) => a - b)
// a : 2, b : 1
// a : 3, b : 2
// a : 4, b : 3

// 0221 done.
