/*
\9.สร้างฟังก์ชันสำหรับคำนวณตู้ขายน้ำ โดยต้องทอนให้ได้เหรียญหรือแบงค์น้อยที่สุด ประเภทเงินทอน
[1, 2, 5, 10, 20, 50, 100, 500, 1000] input: เงินที่ต้องจ่าย, รับเงินที่ลูกค้าจ่าย
output: เหรียญหรือแบงค์ที่ต้องทอน
ตัวอย่าง
ตัวอย่าง Input:
จำนวนเงินที่ต้องจ่าย 35 บาท ลูกค้าจ่ายเข้ามา 100 บาท
Output: ทอนด้วยแบงค์ 50 1 ใบ, เหรียญ 10 1 เหรียญ, เหรียญ 5 1 เหรียญ
*/

function calcu(price, money) {
  let change = money - price;
  console.log(`ต้องทอนเงิน ${change}`);

  const values = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
  values.forEach((value) => {
    if (change >= value) {
      let count = Math.floor(change / value);
      change = change % value;
      if (value >= 20) {
        console.log(`ทอนธนบัตร ${value} : ${count} ใบ`);
      } else {
        console.log(`ทอนเหรียญ ${value} : ${count} เหรียญ`);
      }
    }
  });
}

calcu(76, 100);
