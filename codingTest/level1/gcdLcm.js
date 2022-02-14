const solution = (n, m) => {
  if(n > m) { // n < m  정렬
    let temp;
    temp = m;
    m = n;
    n = temp;
  }

  let gcd ; // 최대공약수
  let lcm ; // 최소공배수

  if(m%n === 0) {
    gcd = n;
    lcm = m;
    return [gcd, lcm]
  }

  for(let i = n; i < m; i--) {
    if((n%i === 0) && (m%i === 0)) {
      gcd = i;
      break;
    }
  }

  for(let i = m; i <= n*m; i++) {
    if((i%n === 0) && (i%m === 0)) {
      lcm = i;
      break;
    }
  }

  return [gcd, lcm];
};

console.log(solution(8, 12));

// 최대공약수는 작은 수 보다 작은 것 중 큰 것으로..
// 최소공배수는 큰 수 보다 큰 수 중 작은 것으로..

// 0214 done;