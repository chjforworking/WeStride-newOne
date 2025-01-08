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
