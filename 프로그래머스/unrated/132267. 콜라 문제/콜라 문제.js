function solution(a, b, n) { // a: b개를 돌려주는데 필요한 병수, b: 돌려주는 병수, n은 가지고 있는 병수    
    let answer = 0;
    let remainCnt = n;
    
    while(remainCnt >= a) {
        let sendCnt = Math.floor(remainCnt/a);
        let receiveCnt = sendCnt*b;
        remainCnt = remainCnt - sendCnt*a + receiveCnt;
        answer += receiveCnt;
    }
    
    return answer;
}