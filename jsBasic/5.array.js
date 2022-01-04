'use strict';

// Array 

// 1. Declaration
const arr1 = new Array();
const arr2  = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits); // proto..?
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 제일 마지막 배열

console.clear();
// 3. Looping over an Array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits) { 
  console.log(fruit);
}
// c. forEach
fruits.forEach((fruit, index) => console.log(fruit));

//4. Addtion, deletion, copy
//push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
fruits.unshift('🍓', '🍋'); // 배열 앞에서 부터 넣을 수 있음
console.log(fruits);

//shift: remove an items from the benigging
fruits.shift(); // 앞에서부터 삭제함
fruits.shift(); 
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 매우매우 느림, 배열을 뒤로 미루고 unshift를 해야하기 때문
// 뒤에서 움직이거나 index로 움직이는 것은 빠름
// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); // index 1만 삭제
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); // 1 삭제후 사과랑 수박 삽입
console.log(fruits);

// conbine two arrays, concat
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching 
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));

// includes
console.log(fruits.includes('🍉')); // bool 값 리턴
console.log(fruits.includes('🥥'));

// lastIndexOF
console.clear();
fruits.push('🍎');
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎')); // last index of apple
fruits.push()
console.clear();
const array = fruits.toLocaleString();
const numbers = [1, 3, 2, 6, 4, 2, 3, 1];
console.log(numbers);
console.log(numbers.lastIndexOf(1, 7));
const smallNum = currentValue => currentValue < 2;
console.log(numbers.some(smallNum));
numbers.forEach((number, index) => console.log(number));
const map1 = numbers.map(x => x*2);
console.log(numbers);
console.log(map1);
const result = numbers.filter(x => x > 3);
console.log(result);
const sum = numbers.reduce((acc, value, index) => {return acc + value});
console.log(sum);
