const solution = (user_id, banned_id) => {
  let ch = Array.from({ length: user_id.length }, () => 0);
  let set = new Set();

  const isPossible = (uId, bId) => {
    if (uId.length !== bId.length) return false;
    for (let i = 0; i < uId.length; i++) {
      if (bId[i] !== "*" && uId[i] !== bId[i]) return false;
    }
    return true;
  };

  const DFS = (idx, cnt, possible) => {
    if (cnt === banned_id.length) {
      let arr = possible.split(" ");
      arr.shift(); // 맨 앞에 저장된 '' 값 제거
      arr.sort();
      let newStr = arr.join("");
      set.add(newStr); // 모든 결과 배열을 sort해서 join해서 set에 보낸다!
      return;
    }
    if (idx >= user_id.length) return;
    else {
      for (let i = idx; i < banned_id.length; i++) {
        // ban아이디 모두 탐색
        for (let j = 0; j < user_id.length; j++) {
          // ban마다 모든 user아이디 탐색
          if (ch[j] === 1) continue; // ch 배열 확인
          if (!isPossible(user_id[j], banned_id[i])) continue; // user 와 ban 비교
          ch[j] = 1; // ch 배열에도 없고 user와 ban 비교해서 일치한다면 ch배열 1로 변경
          DFS(i + 1, cnt + 1, possible + " " + user_id[j]); // 다음 DFS, 현재 i에 +1해서 넘겨주고, cnt도 추가해서 user_id까지 추가
          ch[j] = 0;
        }
      }
    }
  };

  DFS(0, 0, "");

  return set.size;
};