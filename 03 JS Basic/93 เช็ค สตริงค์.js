// ABCDEF -> เป็นตัวอักษรใหญ่
// abcdef -> เป็นตัวอักษรเล็ก
// aAbBcC -> เป็นแบบผสม

function checkStr(str) {
  //สร้างตัวแปรเพื่อเก็บค่า UPPER และ lower
  const upperCaseStr = str.toUpperCase();
  const lowerCaseStr = str.toLowerCase();
  //สร้างเงื่อนไขเพื่อตรวจสอบตัวอักษร
  if (str === upperCaseStr) {
    return "เป็นตัวอักษรใหญ่ทั้งหมด";
  } else if (str === lowerCaseStr) {
    return "เป้นตัวอักษรเล็กทั้งหมด";
  } else {
    return "เป็นตัวอักษรผสม";
  }
}

const str1 = "ABC";
const str2 = "abc";
const str3 = "aBc";
console.log(checkStr(str1));
console.log(checkStr(str2));
console.log(checkStr(str3));
