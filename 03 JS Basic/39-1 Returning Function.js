function makeBetweenFunc (min,max){
    return function (value){
        return value >= min && value <= max;
    }
}

let inAgeRange = makeBetweenFunc(20,90);
console.log(inAgeRange(60));
console.log(inAgeRange(99));