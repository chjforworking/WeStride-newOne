//ตัวอย่าง Callback Hell หรือ Pyramid of Doom!

// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "green";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "blue";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "black";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "yellow";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//การเขียนให้ดีและสวย คือการ func แล้วค่อยใช้ parametre ใส่ลงไปแทน
//แต่ยังไง changBgc ข้างล่างยังไงก็เป็น callback hell อยู่ดี
const changBgc = (color, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    doNext && doNext(); //นี่เป็นตัวอย่างการเขียน if แบบย่อ
  }, delay);
};

changBgc("red", 1000, () => {
  changBgc("green", 1000, () => {
    changBgc("blue", 1000, () => {
      changBgc("black", 1000);
    });
  });
});
