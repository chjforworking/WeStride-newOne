const fullName = [
  {
    first: "Albus",
    last: "Dumbledore",
  },
  {
    first: "Harry",
    last: "Potter",
  },
  {
    first: "Hermione",
    last: "Granger",
  },
  {
    first: "Ron",
    last: "Weasley",
  },
  {
    first: "Rubeus",
    last: "Hagrid",
  },
  {
    first: "Minerva",
    last: "McGonagull",
  },
  {
    first: "Severus",
    last: "Snape",
  },
];

let firstName = fullName.map(function(f){
    return f.first;
    
})

console.log(firstName);
