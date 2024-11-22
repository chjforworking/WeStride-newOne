//1
const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};
const { name, city } = person;
console.log(name);
console.log(city);
console.log("///////////////////");

//2
const person2 = {
  name: "Bob",
  age: 30,
};
const { name: firstName, age } = person2;
console.log(firstName);
console.log(age);
console.log("///////////////////");

//3
const person3 = {
  name: "Charlie",
  country: "Chocolate Factory",
};
const  country = "Thailand";
console.log(country);