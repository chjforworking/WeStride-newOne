let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetArr = alphabet.split("");
let newArr = [];
let newArr02 = [];

function decode(str) {
  let splitedStr = str.split("");
  for (const x of splitedStr) {
    let inputIndex = alphabetArr.indexOf(x);
    let decodeProcess = (inputIndex + 5) % 26;
    let result = alphabetArr[decodeProcess];
    newArr.push(result);
  }
  console.log(newArr.join(""));
}

function crecode(str) {
  let splitedStr = str.split("");
  for (const x of splitedStr) {
    let inputIndex = alphabetArr.indexOf(x);
    let crecodeProcess = (inputIndex + 21) % 26;
    let result = alphabetArr[crecodeProcess];
    newArr02.push(result);
  }
  console.log(newArr02.join(""));
}

crecode("hello");
decode("czggj");