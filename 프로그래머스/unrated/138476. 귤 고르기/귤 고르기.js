const solution = (k, tangerine) => {
    const basketObj = {};
    const basketArr = [];
    let answer = 0;
    
    for(let tanSize of tangerine) {
        if(!basketObj[tanSize]) basketObj[tanSize] = 1;
        else basketObj[tanSize]++;
    }
    
    for(let size in basketObj) {
        let n = basketObj[size];
        basketArr.push([Number(size), n]);
    }
    
    basketArr.sort((a, b) => b[1] - a[1]);
    
    for(let [size, n] of basketArr) {
        if(k <= 0) break;
        k-=n;
        answer++;
    }
    
    
    return answer;
}