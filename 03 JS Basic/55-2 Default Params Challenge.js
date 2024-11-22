//First
function greet(name = 'Guest'){
    return `Hello, ${name}`
}
console.log(greet('Jes'));
console.log(greet());

//Second
function multiply(a,b=5){
    return a*b
}
console.log(multiply(5,3));
console.log(multiply(5));

//Third
function createPerson(name, age = '18'){
    return {name,age};
}
console.log(createPerson('Bill','25'));

console.log(createPerson("Jess"));
