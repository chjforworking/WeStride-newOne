//1
function displayPerson({ name, age }) {
  console.log(`Name: ${name},${age}`);
}
const person1 = {
  name: "Jack Willis",
  age: 29,
};

displayPerson(person1);
console.log("/////////////////////////");

//2
function getCoords({ x, y }) {
  return [x, y];
}
const arr = {
  x: 1,
  y: 2,
};
console.log(getCoords(arr));
console.log("/////////////////////////");

//3
function config({ width, height, color }) {
  return { width, height, color };
}

const box = {
  width: 100,
  height: 100,
  color: "white",
};
console.log(config(box));
console.log("/////////////////////////");
