const nums = [ 3,7,5,3,4,9];
nums.forEach(function (n){
    console.log(n*n);
    
})

console.log('/////////////');
console.log('/////////////');

const students = [
    {
        name : 'Alex',
        age : 20,
        score : 60
    },
    {
        name : 'Alice',
        age : 19,
        score : 75
    },
    {
        name : 'Annie',
        age : 20,
        score : 65
    },
    {
        name : 'Aimmy',
        age : 24,
        score : 60
    },
]

students.forEach(function(s){
    console.log(`Score of ${s.name} is ${s.score}`);    
})