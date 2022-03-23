const solution = (m, arr) => {
  let answer = 0;
  let lt = rt = sum = tmp = 0;
  let n = arr.length;

  while(rt < n) {
    tmp = arr[rt];
    if(tmp < m) answer++;
    sum+=tmp;
    if(sum < m)
    if(sum)
  }


  return answer;
};

console.log(solution(5, [1, 3, 1, 2, 3]));

// 0323 doing
