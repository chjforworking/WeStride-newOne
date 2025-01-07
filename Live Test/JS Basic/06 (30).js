/*
6.สร้างฟังก์ชั่นที่หาความแตกต่างของ array 2 ตัว และผลลัพธ์เรียงจาก น้อยไปมาก (30 คะแนน)
ตัวอย่าง
diffArray ([1, 2, 3], [100, 2, 1, 10]) => [ 3, 10, 100 ]
*/



//Code สามารถ Run ได้ทาง Inspect บน Browser แต่กด Run Code ไม่ได้
let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
function diffArray(arr1,arr2){
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let diff = [...set1.symmetricDifference(set2)];
    let result = diff.sort((a,b) => a - b);
    console.log(result);
}

diffArray(arr1,arr2);