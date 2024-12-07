let input = 25;
let inputArr = [];
function isPrime(x) {
  if (x <= 1) {
    return false;
  }
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

for(let i = 2; i<= input ; i++){
    if(isPrime(i)){
        inputArr.push(i);
    }
}
console.log(inputArr);