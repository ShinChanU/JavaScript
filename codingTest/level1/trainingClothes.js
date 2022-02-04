// 전체 학생 n, 도난당한 학생들 lost [], 여벌 체육복 있는 학생들 reserve []
// 체육수업을 들을 수 있는 학생의 수를 알고싶음

const solution = (n, lost, reserve) => {
  let result = [];

  // 여벌있는 학생이 도난당할 경우0
  let len1 = lost.length;
  let len2 = reserve.length;
  for(let i = 0; i < len1; i++) {
      for(let j = 0; j < len2; j++) {
        if(lost[i] === reserve[j]) {
          lost.splice(i, 1, 0);
          reserve.splice(j, 1, 0);
      }
      console.log(lost, reserve);
    }      
  }

  lost = lost.filter(e => e !== 0).sort((a, b) => a - b);
  reserve = reserve.filter(e => e !== 0).sort((a, b) => a - b);

  console.log(lost, reserve);

  lost.map(e => {
    let minus = reserve.indexOf(e - 1);
    let plus = reserve.indexOf(e + 1);

    if(minus !== -1) {
      lost.splice(lost.indexOf(e), 1, 0);
      reserve.splice(minus, 1);
    } else if(plus !== -1) {
      lost.splice(lost.indexOf(e), 1, 0);
      reserve.splice(plus, 1);
    } else {
    }
  })

  lost.map(e => {
    if(e !== 0)
      result.push(e);
  })
  
  return n - result.length;
}

// const solution2 = (n, lost, reserve) => {
//   console.log(reserve.slice());

//   return n - lost.filter(a => {
//     const b = reserve.find(r => Math.abs(r-a) <= 1)
//     if(!b) return true;
//     reserve = reserve.filter(r => r !== b);
//     console.log(reserve);
//   }).length;
// }

console.log(solution2(5, [2, 4] , [1, 3, 5]));