//   // สร้างอาร์เรย์ผลลัพธ์
//   let oddIndex = 0;
//   return arr.map((num) => {
//     // ถ้าเป็นเลขคู่ คงค่าเดิม
//     if (num % 2 === 0) return num;

//     // ถ้าเป็นเลขคี่ แทนที่ด้วยเลขคี่ที่เรียงแล้ว
//     return oddNums[oddIndex++];
//   });
// }

// // ตัวอย่างการใช้งาน
// console.log(sortOddNumbers([7, 1]));
// console.log(sortOddNumbers([5, 8, 6, 3, 4]));

function sorfOdd(arr){
    //กรองตัวเลขคี่
    const oddNum = arr.filter((num) => num % 2 != 0).sort((a,b) => a - b);
    //สร้าง Array
    let oddIndex = 0;
    

}
