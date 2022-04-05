const solution = (s) => {
  let stack = [];

  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }

  return stack.join("");
};

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

// 0401 done.
// 0405 강의.
