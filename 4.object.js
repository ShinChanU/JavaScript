'use strict';

// Objects
// one of the JavaScript's data type.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object  = { key : value };

// 1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const chan = { name: 'chan', age: 25 }; // key value의 집합체
print(chan);

chan.hasJob = true;  // 동적 타이핑
console.log(chan.hasJob);

delete chan.hasJob;
console.log(chan.hasJob);

// 2. Computed properties []
console.clear();
console.log(chan.name);  // dot . 가능
console.log(chan['name']); // [], string type 대괄호도 가능(computed property)
chan['hasJob'] = true;
console.log(chan.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(chan, 'name');
printValue(chan, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dava', age: 4 };
const person4 = new Person('chan', 30);
console.log(person1);

// 4. Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 5. in operator: property existence check ( key in obj )
console.log('name' in chan);
console.log('age' in chan);
console.log('random' in chan);
console.log(chan.random); // 정의하지  않은 키

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in chan) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [ob1, obj2, obj3...])
console.clear();
const user = { name: 'chan', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // 뒤에 나오는 값으로 덮어씀, blue
console.log(mixed.size);