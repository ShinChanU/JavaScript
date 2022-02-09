const solution = (arr) => {
    let i = 0;
    const result = [];
    while (i < arr.length) {
        if (arr[i] !== arr[i + 1]) { 
            result.push(arr[i])
        }
        i++;
    }
    return result;
};

console.log(solution([4, 4, 4, 3, 3]));

// splice는 효율성 통과 X, push는 통과
// 0208