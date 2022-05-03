const solution = (s) => {
  let result = [];
  let arr = [];
  const regex = /[{}]/g;

  // s = s.replace(regex, " ");
  // s = s.split(" , ");
  // for (let x of s) {
  //   x = x.replace(/\s/g, "");
  //   arr.push(x);
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] = arr[i].split(",").map((e) => parseInt(e));
  // }

  arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
  // 문자열로 이차원 배열처럼 생겼어도 json.parse하면 진짜 이차원배열이 됨!

  arr.sort((a, b) => {
    return a.length - b.length;
  });

  for (let x of arr) {
    for (let e of x) {
      if (!result.includes(e)) result.push(e);
    }
  }

  return result;
};

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));
console.log(solution("{{123}}"));
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
// 0503 1시간 pass
