'use strict';

// Array 

// 1. Declaration
const arr1 = new Array();
const arr2  = [1, 2];

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits); // proto..?
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // μ μΌ λ§μ§λ§ λ°°μ΄

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
fruits.push('π', 'π');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
fruits.unshift('π', 'π'); // λ°°μ΄ μμμ λΆν° λ£μ μ μμ
console.log(fruits);

//shift: remove an items from the benigging
fruits.shift(); // μμμλΆν° μ­μ ν¨
fruits.shift(); 
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// λ§€μ°λ§€μ° λλ¦Ό, λ°°μ΄μ λ€λ‘ λ―Έλ£¨κ³  unshiftλ₯Ό ν΄μΌνκΈ° λλ¬Έ
// λ€μμ μμ§μ΄κ±°λ indexλ‘ μμ§μ΄λ κ²μ λΉ λ¦
// splice: remove an item by index position
fruits.push('π', 'π', 'π');
console.log(fruits);
fruits.splice(1, 1); // index 1λ§ μ­μ 
console.log(fruits);
fruits.splice(1, 1, 'π', 'π'); // 1 μ­μ ν μ¬κ³Όλ μλ° μ½μ
console.log(fruits);

// conbine two arrays, concat
const fruits2 = ['π', 'π₯₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching 
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));

// includes
console.log(fruits.includes('π')); // bool κ° λ¦¬ν΄
console.log(fruits.includes('π₯₯'));

// lastIndexOF
console.clear();
fruits.push('π');
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π')); // last index of apple
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
