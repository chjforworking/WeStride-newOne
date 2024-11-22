//1
const numbers = [3,7,2,8,6];
const maxNumber = Math.max(...numbers)
console.log(maxNumber);

//2
const arr1 = ['a','b','c'];
const arr2 = ['d','e','f'];
function combineArrays(arr1,arr2){
    return [...arr1,...arr2];
}
console.log(combineArrays(arr1,arr2));

//3
const word = "Hello";
const chars = [...word];
console.log(chars);

//4
const array1 = [1,2,3];
const array2 = [4,5,6];
const merged = [...array1,...array2]
console.log(merged);