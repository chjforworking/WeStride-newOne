//เขียนโปรแกรมรับ array 10 ค่า จากนั้นทำการ modulo จำนวนทั้งสิบด้วย 42
//แสดงเศษที่เหลือจากการ mod ที่ไม่ซ้ำกัน ว่ามีกี่ตัว

// let arr1 = [1,2,3,4,5,6,7,8,9,10]
let arr1 = [42, 84, 252, 420, 840, 126, 42, 84, 420, 126];
let emptyArr = [];

function modulo(arr1) {
  for (const x of arr1) {
    let result = x % 42;
    emptyArr.push(result);
  }
  const getSet = new Set(emptyArr);
  let count = getSet.size;
  return count;
}

console.log(modulo(arr1));
