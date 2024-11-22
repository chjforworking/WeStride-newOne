const students = [
  {
    name: "Alex",
    age: 20,
    score: 60,
  },
  {
    name: "Alice",
    age: 19,
    score: 75,
  },
  {
    name: "Annie",
    age: 20,
    score: 65,
  },
  {
    name: "Aimmy",
    age: 24,
    score: 60,
  },
];

//map
let newStudent = students.map(function (ns) {
  console.log(`score of ${ns.name} is ${ns.score}`);
});
console.log("/////////////////////////");
//Arrow Function
let newStudent1 = students.map((s) =>
  console.log(`score of ${s.name} is ${s.score}`)
);
console.log("/////////////////////////");

//Implicit Return
let newStudent2 = students.map((i) => `${i.name} is ${i.age} years old`);
console.log(newStudent2);
console.log("/////////////////////////");
