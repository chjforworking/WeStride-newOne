const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);
const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

console.log(isRightTriangle(3,4,5));

//1 มอง isRight เป็นพื้น
//2 isRight กลับไปมอง square
//3 square กลับไปมอง multiply
//4 เป็นการดำเนินการจากล่างขึ้นบน