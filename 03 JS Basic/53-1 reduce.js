let a = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  console.log(accumulator, "accumulator");
  console.log(currentValue, "currentValue");
  return accumulator + currentValue;
});

console.log(a);
console.log("////////////////////");

//เอามาบวกกันก็เหมือนกับ loop for แต่วิธีการเขียนง่ายกว่า

//Finding Max Value
let b = [8, 2, 5, 3, 1].reduce((max, curr) => {
  if (curr > max) {
    return curr;
  } else {
    return max;
  }
});

console.log(b);
