let userName = [
  "mark",
  "staceysmom1978",
  "q23978475893",
  "carrie98",
  "MoanaFan",
];

//Regular Function
let validUserName = userName.filter(function validUserName(userName) {
  x = userName.length >= 10;
  return x;
});
console.log(validUserName);
console.log('////////////////////////////////////////');


//Arrow Function + Implicit Return
let validUserName1 = userName.filter(userName => userName.length >= 10);
console.log(validUserName1);

