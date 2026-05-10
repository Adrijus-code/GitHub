function sayHi() {
  console.log(`Good morning, I'm ${this.name} and I'm ${this.age} years old.`);
}
let age = 30;

let user = {
  name: "John",
  age,
  sayHi,
};

let user1 = Object.create(user);
user1.name = "Jane";
console.log(user1.name, user1.__proto__);
// let user2 = {
//   name: "Jane",
//   age: 25,
//   sayHi,
// };
