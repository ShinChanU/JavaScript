// 1: 1, 2, 3, 4, 5 반복
// 2: 2, 1, 2, 3, 2, 4, 2, 5, 1, 2, 3, 2, 4, 2, 5
// 3: 3, 3, 1, 2, 2, 2, 4, 4, 5, 5 반복

const solution = (answers) => {
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [];

  let aLen = a.length;
  let bLen = b.length;
  let cLen = c.length;

  let aCount = 0;
  let bCount = 0;
  let cCount = 0;

  answers.map((v, i) => {
    let aL = i%aLen;
    let bL = i%bLen;
    let cL = i%cLen;
    a.splice(i, 1, a[aL]);
    b.splice(i, 1, b[bL]);
    c.splice(i, 1, c[cL]);

    if(v === a[i]) aCount++;
    if(v === b[i]) bCount++;
    if(v === c[i]) cCount++;
  });

  console.log(aCount, bCount, cCount);

  const maxNum = Math.max(aCount, bCount, cCount);
  if(maxNum === 0) {
    return [1, 2, 3];
  }
  if(maxNum === aCount) {
    result.push(1);
  }
  if(maxNum === bCount) {
    result.push(2);
  } 
  if(maxNum === cCount) {
    result.push(3);
  } 

  return result;
};

console.log(solution([0, 0, 0, 0, 0, 0, 2])); 

// 0209 done
// 완전 탐색..