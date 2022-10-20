function solution(number) {
    var answer = 0;
    let n = number.length;
    let check = Array.from({length: n}, () => 0);
    
    const DFS = (L, sum, prev) => {
        if(L >= 3) {
            if(sum === 0) answer++;
            return;
        } else {
            for(let i = prev; i < n; i++) {
                if(!check[i]) {
                    check[i] = 1;
                    DFS(L+1, sum+number[i], i);
                    check[i] = 0;
                }
            }
        }
    };
    
    DFS(0, 0, 0);
    
    return answer;
}