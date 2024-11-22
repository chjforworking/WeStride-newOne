const person = {
  name: "John",
  age: "30",
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  },
};


//เรียกใช้
person.greet()