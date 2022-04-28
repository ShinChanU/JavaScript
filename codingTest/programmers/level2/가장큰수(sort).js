const solution = (arr) => {
  let answer = "";

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      let prev = Number(String(arr[j - 1]).substr(0, 1));
      let now = Number(String(arr[j]).substr(0, 1));
      if (now === prev) {
        if (String(arr[j - 1]).length === String(arr[j]).length) {
          if (arr[j - 1] < arr[j]) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        } else {
          let big =
            String(arr[j - 1]).length > String(arr[j]).length
              ? arr[j - 1]
              : arr[j];
          let small =
            String(arr[j - 1]).length < String(arr[j]).length
              ? arr[j - 1]
              : arr[j];

          let tmp = small * 1;

          while (1) {
            tmp = String(tmp) + String(tmp).substr(0, 1);
            if (String(tmp).length === String(big).length) break;
          }
          if (Number(tmp) > Number(big)) {
            [arr[j - 1], arr[j]] = [small, big];
          } else {
            [arr[j - 1], arr[j]] = [big, small];
          }
        }
      }
      if (prev < now) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
  }

  answer = arr.join("");
  return answer === "" ? "0" : answer;
};

// console.log(solution([6, 10, 2]));
// console.log(solution([3, 30, 34, 5, 9]));
// 0428 fail

const solution2 = (arr) => {
  let answer = "";

  arr.sort((a, b) => {
    let ab = a.toString() + b.toString();
    let ba = b.toString() + a.toString();
    return ba - ab;
  });

  console.log(arr);

  answer = arr.join("");
  return Number(answer) === 0 ? "0" : answer;
};

console.log(solution2([6, 10, 2]));
console.log(solution2([3, 30, 34, 5, 9]));
console.log(solution2([0, 0, 0]));
// 0428 pass.... ba - ab.. sort 이게 맞ㄴ나...
