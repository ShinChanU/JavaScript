function solution(begin, target, words) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = words.length;
  let len = begin.length;
  let ch = Array.from({ length: n }, () => 0);
  let end = 0;

  const compare = (a, b) => {
    let cnt = 0;
    for (let i = 0; i < len; i++) {
      a[i] !== b[i] ? cnt++ : cnt;
    }
    return cnt === 1 ? true : false;
  };

  const DFS = (L, str, cnt) => {
    if (str === target) {
      answer = Math.min(answer, cnt);
      end = 1;
      return;
    }
    if (L === n) {
      answer = 0;
      end = 0;
      return 0;
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          if (compare(str, words[i])) {
            ch[i] = 1;
            cnt++;
            DFS(L + 1, words[i], cnt);
            ch[i] = 0;
            cnt--;
          }
        }
      }
    }
  };

  DFS(0, begin, 0);

  return end ? answer : end;
}

function solution2(begin, target, words) {
  const queue = [begin];
  const visitArr = new Array(words.length).fill(false);
  let ctr = 0;
  let shiftedWord = begin;
  let queueLeng = 1;

  while (queue.length > 0) {
    shiftedWord = queue.shift();
    queueLeng--;

    for (let i in words) {
      if (check(shiftedWord, words[i])) {
        if (visitArr[i] == true) continue;

        if (words[i] == target) return ctr + 1;

        visitArr[i] = true;
        queue.push(words[i]);
      }
    }

    if (queueLeng == 0) {
      ctr++;
      queueLeng = queue.length;
    }
  }

  return 0;

  function check(standard, word) {
    let diffCtr = 0;

    if (standard.length != word.length) return false;

    for (let i = 0; i < standard.length; i++) {
      if (standard.charAt(i) != word.charAt(i)) diffCtr++;
      if (diffCtr > 1) return false;
    }
    return true;
  }
}

retuerndfasd

console.log(
  solution2("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
console.log(solution2("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
// console.log(
//   solution2("aaaaaaaaaa", "bbbbbbbbbb", [
//     "aaaaaaaaab",
//     "aaaaaaaabb",
//     "aaaaaaabbb",
//     "aaaaaabbbb",
//     "aaaaabbbbb",
//     "aaaabbbbbb",
//     "aaabbbbbbb",
//     "aabbbbbbbb",
//     "abbbbbbbbb",
//     "aaaabaaaaa",
//     "aaaabaaaba",
//     "aaabbaaaab",
//     "babaaabaab",
//     "abbaaaabbb",
//     "bbaabbbbaa",
//     "babaabbbbb",
//     "abbbbbbabb",
//     "babbbbbbbb",
//     "bbabbbbbbb",
//     "bbbabbbbbb",
//   ])
// );
