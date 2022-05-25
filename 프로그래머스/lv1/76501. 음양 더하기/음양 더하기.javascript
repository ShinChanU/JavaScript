function solution(absolutes, signs) {
    let answer = 0;
    
    signs.forEach((e, i) => {
        if(!e) absolutes[i] = -absolutes[i]
        answer+=absolutes[i];
    })
    
    return answer;
}
