let input = 100;
for(let i = 2 ; i<=input ; i++){
    if(isPrime(i) == true){
        console.log(i);
    }
}
function isPrime(x) {
  let isPrime = true;
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}