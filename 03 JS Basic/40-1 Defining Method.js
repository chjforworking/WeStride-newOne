const math = {
  plus: function plus(x, y) {
    return x + y;
  },
  minus: function minus(x, y) {
    return x - y;
  },
  multi: function multi(x, y) {
    return x * y;
  },
  devide: function devide(x, y) {
    return x / y;
  }
};

console.log(math.plus(10, 11));
console.log(math.minus(11,9));
console.log(math.multi(7,2));
console.log(math.devide(8,5));


// รูปแบบการเขียน short hand
// const math2 = {
//     plus(x,y){
//         return x + y
//     },
//     minus(x,y){
//         return x - y
//     },
//     multi(x,y){
//         return x*y
//     },
//     devide(x,y){
//         return x/y
//     }
// }