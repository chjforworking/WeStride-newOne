const input = document.querySelector("input");
input.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key == "ArrowUp") {
    console.log("UP");
  } else if (e.key == "ArrowDown") {
    console.log("DOWN");
  } else if (e.key == "ArrowLeft") {
    console.log("LEFT");
  } else if (e.key == "ArrowRight") {
    console.log("Right");
  }
});

//การดูค่า key กับ code
// input.addEventListener("keydown", function (a) {
//   console.log(a.key);
//   console.log(a.code);
// });

//การดักจับ keydown keyup
// input.addEventListener("keydown", function () {
//   console.log("keydown");
// });
// input.addEventListener("keyup", function () {
//   console.log("keyup");
// });
