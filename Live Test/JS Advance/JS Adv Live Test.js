/*
เขียนฟังก์ชั่น return promise object ที่มีการ delay 3 วิ
หลังจากนั้นให้ฟังก์ชั่นมีการ resolve <random number 0-100>
และให้ใช้ค่าจากการ resolve ไปแสดงข้อความบนหน้าจอ ว่า  “Data is <number>” (ตัวเลขให้ random 0-100) 
(โดยให้เขียนออกมา 2 แบบ คือ 1. async / await และ 2.then / catch methods)
*/

const promise = new Promise((resolve) => {
  setTimeout(() => {
    let random = Math.floor(Math.random() * 101);
    if (typeof random === "number") {
      resolve(`THEN/CATCH : Data is ${random}`);
    }
  }, 3000);
});

// then/catch method
promise.then((result) => {
  console.log(result);
});
promise.catch((reason) => {
  console.log(reason);
});

//async / await method
async function randomNum() {
  return new Promise((resolved) => {
    setTimeout(() => {
      let random = Math.floor(Math.random() * 101);
      resolved(random);
    }, 3000);
  });
}
async function awaitFunc() {
  const display = await randomNum();
  console.log(`ASYNC/AWAIT : Data is ${display}`);
}
awaitFunc();
