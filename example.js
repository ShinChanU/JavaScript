// 1: 1, 2, 3, 4, 5 반복
// 2: 2, 1, 2, 3, 2, 4, 2, 5, 1, 2, 3, 2, 4, 2, 5
// 3: 3, 3, 1, 2, 2, 2, 4, 4, 5, 5 반복

const solution = (answers) => {
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let aCount = 0;
  let bCount = 0;
  let cCount = 0;

  for(let i = 0; i < answers.length; i++) {
    let temp = answers[i];
    aCount = a.indexOf(temp) === i ? aCount+1 : aCount;
    bCount = b.indexOf(temp) === i ? bCount+1 : bCount;
    cCount = c.indexOf(temp) === i ? cCount+1 : cCount;
  }

  console.log(aCount, bCount, cCount);

  return ;
};

console.log(solution([1, 3, 2, 4, 2])); 