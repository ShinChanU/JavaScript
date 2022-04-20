// 순열 구하기
const solution = (m, arr) => {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  const DFS = (L, array) => {
    if (L === m) {
      answer.push(tmp.slice());
      return;
    } else {
      let n = array.length;
      for (let i = 0; i < n; i++) {
        tmp[L] = array[i];
        let [temp] = array.splice(i, 1);
        console.log(L, array);
        DFS(L + 1, array);
        array.push(temp);
      }
    }
  };

  DFS(0, arr);

  return answer;
};

console.log(solution(2, [3, 6, 9]));
// 0420 study, X

const solution2 = (m, arr) => {
  let answer = [];
  let n = arr.length;
  let tmp = Array.from({ length: m }, () => 0);
  let ch = Array.from({ length: n }, () => 0); // check 배열 필요, 중복되는 요소 제거

  const DFS = (L) => {
    if (L === m) {
      answer.push(tmp.slice());
      return;
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] !== 1) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  };

  DFS(0);

  return answer;
};

console.log(solution2(2, [3, 6, 9, 5]));

// 0420 lecture.
