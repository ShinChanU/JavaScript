const solution = (n) => {
  let temp = "수박";
  let result = "";
  let check = 0;
  if (n % 2 !== 0) check = 1;
  const num = Math.floor(n / 2);

  for (let i = 0; i < num; i++) {
    result = result + temp;
  }
  if (check === 1) result = result + "수";

  return result;
};

console.log(solution(10));

// 0218 done.
