//1
const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  c: 3,
  d: 4,
};
const mergedObj = {
  ...obj1,
  ...obj2,
};
console.log(mergedObj);

//2
const obj = {
  x: 10,
  y: 20,
};
const newObj = {
  ...obj,
  z: 30,
};
console.log(newObj);

//3
const obj31 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj32 = {
  c: 4,
  d: 5,
};
const mergedObj3 = {
  ...obj31,
  ...obj32,
};
console.log(mergedObj3);