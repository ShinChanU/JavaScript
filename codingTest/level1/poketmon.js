const solution = (nums) => {
    const canHave = nums.length / 2;
    let notSame = [];
    let count = 0;
    let i = 0;

    notSame = nums.filter((e, i) => (
        i === nums.indexOf(e)
    ));

    let result = []
    result.push(notSame[0]);

    while (i < notSame.length - 1) {
        if (count === canHave-1) break;
        if (result[i] !== notSame[i + 1]) {
            result.push(notSame[i + 1]);
            count++;
        }
        // console.log(count);
        i++;
    }

    return result.length;
};

console.log(solution([3, 3, 3, 2, 2, 2]));

// 0208 done, 스킬체크 문제..