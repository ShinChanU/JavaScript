const solution = (dirs) => {
  let answer = 0;
  let n = dirs.length;
  let [i, j] = [0, 0];
  let set = new Set();

  const move = (s) => {
    let [x, y] = [i, j];
    let str1 = "";
    let str2 = "";
    if (s === "U") {
      if (j === 5) return;
      j++;
    } else if (s === "D") {
      if (j === -5) return;
      j--;
    } else if (s === "R") {
      if (i === 5) return;
      i++;
    } else if (s === "L") {
      if (i === -5) return;
      i--;
    }
    str1 = `${x}${y}${i}${j}`;
    str2 = `${i}${j}${x}${y}`;
    if (!set.has(str1)) {
      answer++;
      set.add(str1);
      set.add(str2);
    }
  };

  for (let i = 0; i < n; i++) {
    move(dirs[i]);
  }

  return answer;
};