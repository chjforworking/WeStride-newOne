//1
function includeLast(){
    return arguments[arguments.length-1];
}
console.log(includeLast(1,2,3));
console.log(includeLast('a','b','c','d'));
console.log('//////////////////////////////////');

//2
function excludeLast(...args){
    const newArr = [...args];
    newArr.pop()
    return newArr;
}
console.log(excludeLast(1,2,3,4));
console.log(excludeLast('a','b','c'));
console.log('//////////////////////////////////');

//3
function sumFirstLast(...nums){
    const first = nums[0];
    const last = nums[nums.length-1];
    return first+last;
}
console.log(sumFirstLast(1,2,3,4,5));
console.log(sumFirstLast(2,3,6,1,33));
console.log('//////////////////////////////////');