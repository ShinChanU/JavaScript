const solution = (gems) => {
  let answer = [];
  let len = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < gems.length; i++) {
    let start = i;
    let end = i;

    let set = new Set();
    for (let x of gems) {
      if (!set.has(x)) {
        set.add(x);
      }
    }

    for (end; end < gems.length; end++) {
      if (set.has(gems[end])) {
        set.delete(gems[end]);
      }
      if (set.size === 0) {
        if (len > end - start) {
          len = end - start;
          answer = [start + 1, end + 1];
        }
        len = Math.min(len, end - start + 1);
      }
    }
  }

  return answer;
};

// console.log(
//   solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
// );
// console.log(solution(["AA", "AB", "AC", "AA", "AC"]));
// console.log(solution(["XYZ", "XYZ", "XYZ"]));
// console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));
// console.log(solution(["A", "B", "B", "C", "A", "B", "C", "A", "B", "C"]));
// 0502 40분 소요, 정확성 pass, 효율성 fail
// set로 만들어서 하나씩 이동하면서 검사해보는 코드

// 투포인터 알고리즘, map자료구조 활용 필요
const solution2 = (gems) => {
  let result;
  let answer = Number.MAX_SAFE_INTEGER;
  let set = new Set(gems);
  let map = new Map();
  let lt = 0;
  let rt = 0;

  while (
    lt >= 0 &&
    rt >= 0 &&
    lt <= gems.length &&
    rt <= gems.length &&
    lt <= rt
  ) {
    let gemR = gems[rt];
    let gemL = gems[lt];

    if (map.size === set.size) {
      if (answer > rt - lt) {
        answer = rt - lt;
        result = [lt + 1, rt];
      }
      if (map.get(gemL) - 1 === 0) map.delete(gemL);
      else map.set(gemL, map.get(gemL) - 1);
      lt++;
    } else {
      if (map.has(gemR)) {
        map.set(gemR, map.get(gemR) + 1);
      } else {
        map.set(gemR, 1);
      }
      rt++;
    }
  }

  console.log(map);
  console.log(map.values());

  return result;
};

console.log(
  solution2(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
);
// console.log(solution2(["AA", "AB", "AC", "AA", "AC"]));
// console.log(solution2(["XYZ", "XYZ", "XYZ"]));
// console.log(solution2(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));
// console.log(solution2(["A", "B", "B", "C", "A", "B", "C", "A", "B", "C"]));
// 1시간 추가 소요, pass
// map, set 자료구조 + two Pointer 알고리즘 사용
