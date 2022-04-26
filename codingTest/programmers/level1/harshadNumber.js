const solution = (x) => { 
  let arr = [];
  let temp = x;
  let result = x;

  while(temp > 0) {
    arr.push(x%10);
    x = (x - x%10) / 10;
    temp = x;
  }

  let hap = arr.reduce((a, b) => a + b);

  if(result%hap === 0) {
    return true;
  }

  return false;
};

console.log(solution(136));

// x+"" =>  타입이 num에서 string 됨.
// num + string => string // 공부 필요
// 0214 done