//วิธีการเขียนแบบเดิม
const p = document.querySelector(".color");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = `rgb(${r},${g},${b})`;
  document.body.style.backgroundColor = color;
  console.log(color);

  p.innerText = color;
});


//วิธีการเขียนแบบ function ที่ทำให้ clean ขึ้น
// const p = document.querySelector(".color");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//     let bgColor = randomColor()
//   document.body.style.backgroundColor = bgColor;
//   console.log(bgColor);

//   p.innerText = bgColor;
// });

// function randomColor(){
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     let color = `rgb(${r},${g},${b})`;
//     return color;
// }