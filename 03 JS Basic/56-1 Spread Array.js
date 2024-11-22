//Function Call Spread
const nums = [9,6,3,1,15];
const max = Math.max(...nums);
console.log(max);
console.log('//////////////');


//Array Spread
let a = [1,2,3];
let b = [4,5,6];
let mix = [...a,...b];
console.log(mix);