/*9.สร้างฟังก์ชันสำหรับคำนวณตู้ขายน้ำ โดยต้องทอนให้ได้เหรียญหรือแบงค์น้อยที่สุด ประเภทเงินทอน
[1, 2, 5, 10, 20, 50, 100, 500, 1000] input: เงินที่ต้องจ่าย, รับเงินที่ลูกค้าจ่าย
output: เหรียญหรือแบงค์ที่ต้องทอน
ตัวอย่าง
ตัวอย่าง Input:
จำนวนเงินที่ต้องจ่าย 35 บาท ลูกค้าจ่ายเข้ามา 100 บาท
Output: ทอนด้วยแบงค์ 50 1 ใบ, เหรียญ 10 1 เหรียญ, เหรียญ 5 1 เหรียญ
*/

function calcu(priceTag, money) {
  let changeMoney = money - priceTag;
  console.log(`ต้องทอนเงิน ${changeMoney}`);
  //ทอน 1000
  if (changeMoney > 1000) {
    let count1 = 0;
    for (let i = 0; changeMoney >= 1000; i++) {
      changeMoney -= 1000;
      count1++;
    }
    console.log(`ทอนธนบัตร 1000 : ${count1} ใบ`);
  }
  //ทอน 500
  if (changeMoney >= 500 && changeMoney < 1000) {
    let count2 = 0;
    for (let i = 0; changeMoney >= 500; i++) {
      changeMoney -= 500;
      count2++;
    }
    console.log(`ทอนธนบัตร 500 : ${count2} ใบ`);
  }
  //ทอน 100
  if (changeMoney >= 100 && changeMoney < 500) {
    let count3 = 0;
    for (let i = 0; changeMoney >= 100; i++) {
      changeMoney -= 100;
      count3++;
    }
    console.log(`ทอนธนบัตร 100 : ${count3} ใบ`);
  }
  //ทอน 50
  if (changeMoney >= 50 && changeMoney < 100) {
    let count4 = 0;
    for (let i = 0; changeMoney >= 50; i++) {
      changeMoney -= 50;
      count4++;
    }
    console.log(`ทอนธนบัตร 50 : ${count4} ใบ`);
  }
  //ทอน 20
  if (changeMoney >= 20 && changeMoney < 50) {
    let count5 = 0;
    for (let i = 0; changeMoney >= 20; i++) {
      changeMoney -= 20;
      count5++;
    }
    console.log(`ทอนธนบัตร 20 : ${count5} ใบ`);
  }
  //ทอน 10
  if (changeMoney >= 10 && changeMoney < 20) {
    let count6 = 0;
    for (let i = 0; changeMoney >= 10; i++) {
      changeMoney -= 10;
      count6++;
    }
    console.log(`ทอนเหรียญ 10 : ${count6} เหรียญ`);
  }
  //ทอน 5
  if (changeMoney >= 5 && changeMoney < 10) {
    let count7 = 0;
    for (let i = 0; changeMoney >= 5; i++) {
      changeMoney -= 5;
      count7++;
    }
    console.log(`ทอนเหรียญ 5 : ${count7} เหรียญ`);
  }
  //ทอน 2
  if (changeMoney >= 2 && changeMoney < 5) {
    let count8 = 0;
    for (let i = 0; changeMoney >= 2; i++) {
      changeMoney -= 2;
      count8++;
    }
    console.log(`ทอนเหรียญ 2 : ${count8} เหรียญ`);
  }
  //ทอน 1
  if (changeMoney >= 1 && changeMoney < 2) {
    let count9 = 0;
    for (let i = 0; changeMoney >= 1; i++) {
      changeMoney -= 1;
      count9++;
    }
    console.log(`ทอนเหรียญ 1 : ${count9} เหรียญ`);
  }
}

calcu(35, 100);
