function solution(s) {
  var answer;

  let arr = s.split(" ");
  let regex = /[a-z]/d;
  answer = arr.map((e) => {
    let tmp = [];
    for (let i = 0; i < e.length; i++) {
      let result;
      let el = e[i];
      if (i === 0) {
        if (regex.test(el)) result = el.toUpperCase();
        else result = el;
      } else {
        if (!regex.test(el)) result = el.toLowerCase();
        else result = el;
      }
      tmp.push(result);
    }
    return tmp.join("");
  });

  return answer.join(" ");
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
