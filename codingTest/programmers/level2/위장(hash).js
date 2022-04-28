const solution = (clothes) => {
  let answer = 0;
  let n = clothes.length;

  const DFS = (L, arr) => {
    if (L === n) {
      answer++;
      return;
    } else {
      let cate = clothes[L][1];
      if (arr.includes(cate)) {
        DFS(L + 1, arr);
      } else {
        DFS(L + 1, [...arr, cate]);
        DFS(L + 1, arr);
      }
    }
  };

  DFS(0, []);
  answer--;

  return answer;
};

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eye_wear"],
    ["green_turban", "headgear"],
  ])
);
// 시간 초과(재귀, DFS로 풂)

const solution2 = (clothes) => {
  let answer = 1;
  let obj = {};

  for (let x of clothes) {
    let name = x[0];
    let type = x[1];
    if (obj[type] === undefined) {
      obj[type] = [name];
    } else {
      obj[type].push(name);
    }
  }

  for (let key in obj) {
    let n = obj[key].length + 1;
    answer *= n;
  }

  return --answer;
};

console.log(
  solution2([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eye_wear"],
    ["green_turban", "headgear"],
  ])
);
// 통과(결국 공식화해서 해결)
// 0428
