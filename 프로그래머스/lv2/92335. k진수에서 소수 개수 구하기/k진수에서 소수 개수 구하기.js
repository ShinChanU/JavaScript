const isPrime = (n) => {
    if(n < 2) return 0;
    let flag = 0;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n%i === 0) {
            flag = 1;
            break;    
        } 
    }
    if(flag) return 0;
    else return 1;
};

function solution(n, k) {
    var answer = 0;
    const num = n.toString(k)
    console.log(num,  num.split("0"));
    num.split("0").forEach((e) => {
        if(e !== "") if(isPrime(+e)) answer++;
    })
    
    return answer;
}