/*
6.สร้างฟังก์ชั่นที่หาความแตกต่างของ array 2 ตัว และผลลัพธ์เรียงจาก น้อยไปมาก (30 คะแนน)
ตัวอย่าง
diffArray ([1, 2, 3], [100, 2, 1, 10]) => [ 3, 10, 100 ]
*/

function diffArray(arr1, arr2) {
  let merge = arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
  let minMax = merge.sort((a, b) => a - b);
  console.log(minMax);
}

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
diffArray(arr1, arr2);
