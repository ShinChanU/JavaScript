//  Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName; //field
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age; // 콜스택 에러방지를 위해 변수명 변경
  }


  set age(value) {
    this._age = value < 0 ? 0 : value;
  }

  // 그냥 this.age 사용시 콜스택 에러, 이유는 생성자에서 this.age사용시 get 호출, = age에서 set을 호출해서 무한 루프가 돌아감
}

const user1 = new User('Steve', 'job', '30'); // new 사용
console.log(user1.age);

// 3. fields (public, private)
console.clear();
class Experiment {
  publicField = 2;  // class 외부에서도 사용가능
  #privateField = 0; // class 내부에서만 사용가능
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Inheritance 상속, 다양성
console.clear();
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  } //field

  draw() {
    console.log(`draw ${this.color} color!`);
  } //method

  getArea() {
    return this.width * this.height;
  } //method
}

class Rectangle extends Shape { } // 상속
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 draw() 함수도 호출
    console.log('🍕');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle:  color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
console.clear();
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

console.clear();
console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Object);
console.log(triangle.toString());
