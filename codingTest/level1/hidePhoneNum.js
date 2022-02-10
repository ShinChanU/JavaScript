const solution = (number) => {
  let result = [];
  result = number.split("")
  for (let i = 0; i < result.length-4; i++) {
    result[i] = '*';
  }
  return result.join(""); 
};

console.log(solution("01033334444"));