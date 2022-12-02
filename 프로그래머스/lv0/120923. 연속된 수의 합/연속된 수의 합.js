function solution(num, total) {
    const answer = [];
    let mid = Math.floor(total/num);
    answer.push(mid);
    let gap = 1;
    while(answer.length < num) {
        answer.push(mid+gap);
        answer.push(mid-gap);
        gap++;
    }
    if(answer.length > num) answer.pop();
    return answer.sort((a, b) => a - b);
}