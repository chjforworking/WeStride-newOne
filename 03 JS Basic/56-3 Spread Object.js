let student = {
  name: "Jes",
  age: 25,
  score: 70,
};

let newInfo = {
    ...student,
    isPass : true,
}

console.log(newInfo);
