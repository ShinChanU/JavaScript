const obj = {
  a: "aya",
  y: "ye",
  w: "woo",
  m: "ma",
};

function solution(babbling) {
  let answer = 0;

  for (let str of babbling) {
    let tmp = str.slice();
    let now;
    while (1) {
      let strInObj = obj[tmp[0]];
      if (
        strInObj !== undefined &&
        strInObj === tmp.slice(0, strInObj.length) &&
        strInObj !== now
      ) {
        now = strInObj;
        tmp = tmp.slice(strInObj.length);
      } else break;
    }

    if (!tmp.length) answer++;
  }

  return answer;
}