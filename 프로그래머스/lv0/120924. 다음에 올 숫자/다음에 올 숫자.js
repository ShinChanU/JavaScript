function solution(common) {
    var answer = 0;
    let n = common.length;
    let beside = common[1] - common[0];
    if(common[1]+beside === common[2]) answer = common[n-1] + beside;
    else {
        beside = common[1] / common[0];
        answer = common[n-1] * beside;
    }
    
    return answer
}