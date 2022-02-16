const solution = (s) => {
  const arr = s.split(" ");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    let word = "";
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        word = word + arr[i][j].toUpperCase();
      } else {
        word = word + arr[i][j].toLowerCase();
      }
    }
    if (i !== arr.length - 1) word = word + " ";
    result = result + word;
  }

  return result;
};

console.log(solution("HELLO"));

// 정규식으로 해결 s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
// 나중에 공부해보기
// return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
// 위의 것도 참고 join(" ") 사용 해보셈
// 0216 done.
