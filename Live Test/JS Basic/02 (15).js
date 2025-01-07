//function รวมตัวเลขที่ได้รับมา
//input: 89 -> 8**1 + 9**2
// let arr = [];
// let arr2 = [];

// function power(numbers) {
//   let stringNumbers = `${numbers}`;
//   let splitStr = stringNumbers.split("");
//   arr.push(...splitStr);
//   for (let i = 1; i <= arr.length; i++) {
//     let process = arr[i - 1] ** i;
//     arr2.push(process);
//   }
//   let result = arr2.reduce((x, y) => {
//     return x + y;
//   });
//   console.log(result);
// }
// power(89);



//function รวมตัวเลขที่ได้รับมา
//input: 89 -> 8**1 + 9**2
function power(num) {
  let stringNumber = `${num}`;
  let result = 0;
  for (let i = 0; i < stringNumber.length; i++) {
    let index = stringNumber[i];
    result = result + index ** (i + 1);
  }
  console.log(result);
}

power(89);
power(123);
power(65);
power(321);
