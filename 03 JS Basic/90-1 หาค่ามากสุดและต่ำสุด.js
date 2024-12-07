const arr = [2, 4, 6, 8, 1, 0, 8];
let min = arr[0];
let max = arr[0];

arr.forEach(function (x) {
  if (x < min) {
    min = x;
  }
  if (x > max) {
    max = x;
  }
});
console.log(`Min = ${min}`);
console.log(`Max = ${max}`);
