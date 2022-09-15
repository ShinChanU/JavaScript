const solution = (queue1, queue2) => {
    let answer = 0;
    let arr = [...queue1, ...queue2];
    const sum = arr.reduce((a, b) => a+b);
    const half = sum/2;
    if((half%1) !== 0) return -1;
    let lt = 0;
    let rt = queue1.length;
    let midSum = arr.slice(lt, rt).reduce((a, b) => a+b);
    let flag = 0;
    
    while(lt < rt) {
        if(midSum === half) {
            flag = 1;
            break;
        }
        if(midSum < half) midSum+=arr[rt++];
        else midSum-=arr[lt++];
        answer++;
    }
    
    if(flag) return answer;
    else return -1;
}