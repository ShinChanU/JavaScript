const solution = (arr) => {
  let n = arr.length;
  let cnt = 0;

  while (arr[0] !== arr[n - 1]) {
    cnt++;
    let fir = arr[0];
    let last = arr[n - 1];
    let addN = 0;
    if (last - fir >= 5) addN = 5;
    else if (last - fir >= 2) addN = 2;
    else addN = 1;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] + addN <= last) arr[i] += addN;
    }
    arr.sort((a, b) => a - b);

    console.log(arr);
  }

  return cnt;
};

console.log(solution([2, 2, 3, 7]));
console.log(solution([10, 7, 12]));
