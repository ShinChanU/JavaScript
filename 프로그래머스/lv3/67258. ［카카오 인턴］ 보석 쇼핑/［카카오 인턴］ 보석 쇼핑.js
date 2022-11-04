const solution = (gems) => {
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
        // console.log(answer, result);
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

  return result;
};