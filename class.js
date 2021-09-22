//  Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName; //field
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {

    this._age = value < 0 ? 0 : value;
  }

}

// const user1 = new User('Steve', 'job','-1');
// console.log(user1.age);

// // 3. fields (public, private)
// class Experiment { 
//   publicField = 2;  // class 외부에서도 사용가능
//   #privateField = 0; // class 내부에서만 사용가능
// }

// const experiment = new Experiment();
// console.log(experiment.publicField);
// console.log(experiment.privateField);

// // 4. Inheritance 상속, 다양성
// class Shape {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   } //field

//   draw() {
//     console.log(`draw ${this.color} color!`);
//   } //method

//   getArea() {
//     return this.width * this.height;
//   } //method
// }

// class Rectangle extends Shape {} // 상속
// class Triangle extends Shape {
//   draw() {
//   super.draw();
//   console.log('🍕');
//   }
//   getArea() {
//     return (this.width * this.height) / 2;
//   }

//   toString() {
//     return `Triangle:  color: ${this.color}`;
//   }
// }

// const rectangle = new Rectangle(20, 20, 'blue');
// rectangle.draw();
// console.log(rectangle.getArea());
// const triangle = new Triangle(20, 20, 'red');
// triangle.draw();
// console.log(triangle.getArea());

// console.log(rectangle instanceof Rectangle);
// console.log(rectangle instanceof Object);
// console.log(triangle.toString());
