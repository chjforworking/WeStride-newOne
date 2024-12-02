//เขียนโปรแกรม return ตัวอักษรสุดท้าย
function findLastChar(str) {
  let len = str.length;
  let indexOfLastChar = len - 1;
  let result = str[indexOfLastChar];
  console.log(result);
}

findLastChar("Hello");
/*
กระบวนการคิด
1.สร้าง function (define function or create function) -> define function
2.คิด process ในการดึงตัวอักษรตัวสุดท้ายออกมา -> index กับ length
2.1 หาความยาวหรือจำนวน
2.2 จำนวน -1 = index ตัวสุดท้าย

*/
