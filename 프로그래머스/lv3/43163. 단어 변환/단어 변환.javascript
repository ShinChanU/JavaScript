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