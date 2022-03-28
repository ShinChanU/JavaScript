// 첫 번째 풀이(내가 푼)
const solution = (a, b) => {
  let answer = "NO";
  let aH = new Map();
  let bH = new Map();

  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (aH.has(a[i])) aH.set(a[i], aH.get(a[i]) + 1);
      if (bH.has(b[i])) bH.set(b[i], bH.get(b[i]) + 1);
      if (!aH.has(a[i])) aH.set(a[i], 1);
      if (!bH.has(b[i])) bH.set(b[i], 1);
    }
    for (let [key, val] of aH) {
      if (val !== bH.get(key)) return answer;
    }
    answer = "YES";
  }
  return answer;
};

const a = "AbaAeCe";
const b = "baeeACA";
const c = "abaCC";
const d = "Caaab";

console.log(solution(a, b));
console.log(solution(c, d));

//  두번때 풀이(강의 답안)

const solution2 = (a, b) => {
  let answer = "YES";
  let sH = new Map();

  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (sH.has(a[i])) sH.set(a[i], sH.get(a[i]) + 1);
      else sH.set(a[i], 1);
    }

    for (let x of b) {
      // key가 있는 지 확인후 있으면 value 감소 (감소하려는데 0이면 return )
      if (!sH.has(x) || sH.get(x) === 0) return "NO";
      sH.set(x, sH.get(x) - 1);
    }
    return answer;
  }
};

console.log(solution2(a, b));
console.log(solution2(c, d));

// 220328 done.
