//เอา input ไปหาร 3 และ 11 ได้เศษเท่าไรโดยห้ามใช้ modulo
// 18 -> 0กับ7 , 167 -> 2กับ2

function findRemain(num) {
  let remainThree = num;
  let remainEleven = num;

  while (remainThree >= 3) {
    remainThree -= 3;
  }
  while (remainEleven >= 11) {
    remainEleven -= 11;
  }
  return [`หากหาร 3 จะได้ ${remainThree} / หากหาร 11 จะได้ ${remainEleven}`]
}

console.log(findRemain(1285));