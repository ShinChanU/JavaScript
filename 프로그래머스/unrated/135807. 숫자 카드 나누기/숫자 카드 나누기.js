/*
1. arrayA, arrayB의 최대공약수를 각각 구함
2. 각각의 최대공약수가 다른 배열에는 모두 나누어지지 않아야한다
*/

function solution(arrayA, arrayB) {
    arrayA.sort((a, b) => a - b);
    arrayB.sort((a, b) => a - b);
    
    const getMaxDivisor = (arr) => {
        let result = 1;
        
        for(let i = 2; i <= arr[0]; i++) {
            let flag = 0;
            for(let j = 0; j < arr.length; j++) {
                if(arr[j]%i !== 0) {
                    flag = 1;
                    break;
                }
            }
            if(!flag) {
                result = i;
            } 
        }
        
        return result;
    };
    
    const isDivideArr = (arr, num) => {
        let flag = 0;
        for(let i = 0; i < arr.length; i++) {
            if(!(arr[i]%num)) {
                flag = 1;
                break;
            }
        }
        return flag;
    }
    
    let a = getMaxDivisor(arrayA);
    if(isDivideArr(arrayB, a)) a = 0;
    
    let b = getMaxDivisor(arrayB);
    if(isDivideArr(arrayA, b)) b = 0;
    
    return Math.max(a, b);
}