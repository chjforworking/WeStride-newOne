//Arrow Function
const sum = (x,y) => {
    return x+y;
}
console.log(sum(7,7));

//Implicit Return
const sum1 = (x,y) => (
    x+y
);
console.log(sum1(10,12));

//Implicit Return with oneline
const sum2 = (x,y) => x+y;
console.log(sum2(7,9))