//1
const arr1 = [1,2,3,4,5];
const [a,b,c,d,e] = arr1 ;
console.log(b);
console.log(d);
console.log('//////////////////');
//2
const arr2 = [1,2,3,4,5];
const [x,,y,,z] = arr2;
console.log(x);
console.log(y);
console.log(z);
console.log('//////////////////');
//3
const arr3 = [1,2,3,4,5];
const [f,g,...rest] = arr3;
console.log(f);
console.log(g);
console.log(...rest);
console.log('//////////////////');