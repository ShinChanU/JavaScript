const solution = (arr) => {
  let answer = 0;
  let n = arr.length;

  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (!(num % i)) return false;
    }
    return true;
  };

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (isPrime(arr[i] + arr[j] + arr[k])) answer++;
      }
    }
  }

  return answer;
};

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
// 0611
