const solution = (orders, course) => {
  let answer = [];
  let courseMenu = {};
  let queue = [];

  for (let menu of orders) {
    for (let i = 0; i < menu.length; i++) {
      queue.push([menu[i]]);
      let len = 0;
      while (queue.length) {
        let v = queue.shift();
        let n = v.length;
        let arr = [];
        for (let k = 0; k < n; k++) {
          if (v[k].length > 1) {
            let seqMenu = v[k].split("").sort().join("");
            courseMenu[seqMenu] = !courseMenu[seqMenu]
              ? 1
              : courseMenu[seqMenu] + 1;
          }
          for (let j = menu.indexOf(v[k][len]) + 1; j < menu.length; j++) {
            arr.push(v[k] + menu[j]);
          }
        }
        len++;
        if (arr.length) queue.push(arr);
      }
    }
  }

  for (let n of course) {
    let max = 2;
    let maxMenu = [];
    for (let key in courseMenu) {
      if (key.length === n) {
        if (courseMenu[key] > max) {
          max = courseMenu[key];
          maxMenu = [key];
        } else if (courseMenu[key] === max) {
          maxMenu.push(key);
        }
      }
    }
    answer = [...answer, ...maxMenu];
  }

  return answer.sort();
};

const o1 = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]; //	["AC", "ACDE", "BCFG", "CDE"]
const o2 = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]; //	["ACD", "AD", "ADE", "CD", "XYZ"]
const o3 = ["XYZ", "XWY", "WXA"]; //["WX", "XY"]
const c1 = [2, 3, 4];
const c2 = [2, 3, 5];
const c3 = [2, 3, 4];

console.log(solution(o1, c1));
console.log(solution(o2, c2));
console.log(solution(o3, c3));
