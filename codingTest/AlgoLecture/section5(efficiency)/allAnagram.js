// two pointer, sliding window, hash
const solution = (s, t) => {
  let answer = 0;
  let cnt = 0;
  let sH = new Map();
  let lt = (rt = 0);

  // Map 저장
  for (let x of t) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  // 1번째 test
  while (rt < t.length) {
    if (sH.has(s[rt])) {
      sH.set(s[rt], sH.get(s[rt]) - 1);
      if (sH.get(s[rt]) === 0) cnt++;
    }
    rt++;
  }

  if (cnt === [...sH].length) answer++;

  //  그 뒤로 lt 증가 , s[lt]에 해당하는 map 증가, rt는 증가해서 map에서는 --
  while (rt < s.length) {
    if (sH.has(s[lt])) {
      sH.set(s[lt], sH.get(s[lt]) + 1);
      if (sH.get(s[lt]) === 0) cnt++;
      else if (sH.get(s[lt]) === 1) cnt--;
    }
    if (sH.has(s[rt])) {
      sH.set(s[rt], sH.get(s[rt]) - 1);
      if (sH.get(s[rt]) === 0) cnt++;
      else if (sH.get(s[rt]) === -1) cnt--;
    }
    if (cnt === [...sH].length) answer++;
    lt++;
    rt++;
  }

  return answer;
};

const s = "bacaAacba";
const t = "abc";
console.log(solution(s, t));

// 0329 done.

// 강의 풀이, sH,tH Map 두개 생성, 초기값은 length-1개 만큼 선언
const solution2 = (s, t) => {
  const compare = (map1, map2) => {
    if (map1.size === map2.size) {
      for (let [key, value] of map2) {
        if (map1.has(key)) {
          if (map2.get(key) !== value) return false;
        } else {
          return false;
        }
      }
      return true;
    } else return false;
  };

  let answer = 0;
  let sH = new Map();
  let tH = new Map();
  let lt = (rt = 0);

  // tH Map 저장
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  // 1번째 len - 1개로 초기화
  for (rt; rt < t.length - 1; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
  }

  // lt++, rt++
  for (rt; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    // console.log(sH, answer);
    // if (compare(sH, tH)) answer++;
    if (compare(sH, tH)) answer++;
    if (sH.get(s[lt]) === 1) {
      sH.delete(s[lt]);
    } else {
      sH.set(s[lt], sH.get(s[lt]) - 1);
    }
    lt++;
  }

  return answer;
};

console.log(solution2(s, t));

// 0330 done
