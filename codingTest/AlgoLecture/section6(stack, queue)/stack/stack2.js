const solution = (str) => {
  let stack = [];

  for (let x of str) {
    stack.push(x);
    if (x === ")") {
      while (stack.pop() !== "(") {}
    }
  }

  return stack.join("");
};

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

// 0401 done.
