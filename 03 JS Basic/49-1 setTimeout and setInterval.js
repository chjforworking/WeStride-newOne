//setTimeout
setTimeout(function () {
  console.log("Bye");
}, 3000);
console.log("Hello");

//setInterval
let count = 0;
setInterval(function () {
  console.log("Count: ", count);
  count++;
}, 1000);
