const solution = (order, source, target) => {
  // order: source 문자열에서 제거할 문자의 인덱스를 순서대로 가지고 있는 배열
  // source: 검색 데이터 베이스 문자열
  // target: 검색하는 문자열
  let answer = 0;
  let n = order.length;
  let srcArr = source.split("");
  let tgetArr = target.split("");
  let flag = 0;

  for (let i = 0; i < n; i++) {
    srcArr[order[i] - 1] = "-";
    let tmpSrc = srcArr.slice();
    let prev;
    let pt = 0;
    let cnt = 0;
    for (let j = 0; j < tgetArr.length; j++) {
      while (pt < tgetArr.length) {
        console.log(tgetArr[j], srcArr[pt], j, pt);
        if (tgetArr[j] === srcArr[pt]) {
          pt++;
          cnt++;
          break;
        }
        pt++;
      }
    }
    // console.log(cnt, tgetArr);

    //   let idx = tmpSrc.indexOf(tgetArr[j]);
    //   if (prev && prev > idx) flag = 1;
    //   if (idx === -1) flag = 1;
    //   else tmpSrc[idx] = "-";
    //   if (flag) break;
    //   prev = idx;
    // }
    // if (flag) break;
    answer++;
  }

  return answer;
};

console.log(solution([1, 4, 2, 3, 5], "hkbdi", "kd"));
// console.log(solution([7, 1, 2, 5, 4, 3, 6], "abbabaa", "bb"));
// console.log(solution([3, 1, 2, 4, 5], "abcde", "ea"));
// console.log(solution([1, 2, 3, 4], "abcd", "abcd"));
