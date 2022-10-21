// function solution(elements) {
//     var answer = 0;
//     let n = elements.length;
//     let set = new Set();

//     const sumArr = (_arr) => {
//         let sum = 0 ;
//         for(let [x, _] of _arr) {
//             sum+=x;
//         }
//         return sum;
//     };

//     for(let i = 0; i < n; i++) {
//         let num = elements[i];
//         let queue = [[[num, i]]];

//         while(queue.length) {
//             let arr = queue.shift();
//             let sum = sumArr(arr);
//             console.log(arr,sum);
//             // if(set.has(sum)) continue;
//             set.add(sum);

//             if(arr.length >= n) break;
//             if(arr.length  > 1) {
//                     let first = arr[0];
//                     let last = arr[arr.length - 1];
//                     let prev = first[1] -1;
//                     let next = last[1] + 1;
//                     if(prev < 0) prev = n-1;
//                     if(next === n) next = 0;
//                     queue.push([[elements[prev], prev], ...arr]);
//                     queue.push([...arr, [elements[next], next]]);
//             } else {
//                 let first = arr[0];
//                 let prev = first[1]-1;
//                 let next = first[1]+1;
//                 if(prev < 0) prev = n-1;
//                 if(next === n) next = 0;
//                 queue.push([[elements[prev], prev], ...arr]);
//                 queue.push([...arr, [elements[next], next]]);
//             }
//         }
//     }

//     console.log(set);

//     return set.size;
// }

// const solution =
